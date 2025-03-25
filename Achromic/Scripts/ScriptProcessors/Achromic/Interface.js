/*
    Copyright 2023, 2024, 2025 iamlamprey

    This file is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This file is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with This file. If not, see <http://www.gnu.org/licenses/>.
*/

Content.makeFrontInterface(1000, 710);

/* Rhapsody Includes */
include("RhapsodyBoilerplate/includes/Ui.js");
include("RhapsodyBoilerplate/includes/LookAndFeel.js");
include("RhapsodyBoilerplate/includes/Paths.js");
include("RhapsodyBoilerplate/includes/Expansions.js");
include("RhapsodyBoilerplate/includes/Header.js");
include("RhapsodyBoilerplate/includes/Footer.js");
include("RhapsodyBoilerplate/includes/Presets.js");
include("RhapsodyBoilerplate/includes/UserSettings.js");
include("RhapsodyBoilerplate/includes/ZoomHandler.js");

/* NEAT Includes */
include("NEATBoilerplate/includes/NEATRhapsodyRefs.js");
include("NEATBoilerplate/includes/NEATRandom.js");
include("NEATBoilerplate/includes/NEATUi.js");
include("NEATBoilerplate/includes/NEATChaosEngine.js");
include("NEATBoilerplate/includes/NEATTooltip.js");
include("NEATBoilerplate/includes/NEATStoreButton.js");

/* Achromic Specific */

const pnlAchromic = Content.getComponent("pnlAchromic");
const btnAchromic = [Content.getComponent("btnAchromicAttack"), Content.getComponent("btnAchromicRelease"), Content.getComponent("btnAchromicGate"), Content.getComponent("btnAchromicDownpick")];

reg currentRR = 1;
reg previousRR;
reg isUpPick = 0;
reg forceDownPick = 0;

const resetRR = 36;
const keyRange = [41, 98];
const pickAttack = 1;
const fxKeyRange = [108, 117];
const numCustomRoundRobins = 6;

const randomReleaseNoiseKey = 2;
const randomReleaseNoiseChance = 0.3;

// Disable RR

samplerA[0].asSampler().enableRoundRobin(false);
samplerB[0].asSampler().enableRoundRobin(false);

pnlAchromic.setPaintRoutine(function(g)
{
	var w = this.getWidth();
	var h = this.getHeight();	
	g.setColour(Colours.withAlpha(clrRhapsodyBlue, 1.0));
	g.fillRoundedRectangle([0, 0, w, h], 10.0);	
	var noiseData = {
				"alpha" : .1,
				"monochromatic" : false,
				"scaleFactor" : 2,
				"area" : [0, 0, this.getWidth(), this.getHeight()]		
			};			
	g.addNoise(noiseData);
});

for (b in btnAchromic)
	b.setLocalLookAndFeel(LAFButtonNEAT);

function onNoteOn()
{
	local e = Message.getNoteNumber();
	local v = Message.getVelocity();	
	forceDownPick = btnAchromic[3].getValue();
	
	// Non-Repeating Round Robin
	if (e >= keyRange[0] && e <= keyRange[1])
		if (!btnArpBypass[0].getValue())
		{
			previousRR = currentRR;
			while (currentRR == previousRR)
				currentRR = Math.randInt(1, numCustomRoundRobins + 1);
				
			if (!isUpPick) // Down
			{
				samplerA[0].asSampler().setActiveGroup(currentRR);
				samplerB[0].asSampler().setActiveGroup(previousRR);
				isUpPick = 1 - forceDownPick;
			}
			else // Up 
			{
				samplerA[0].asSampler().setActiveGroup(currentRR + numCustomRoundRobins);
				samplerB[0].asSampler().setActiveGroup(previousRR + numCustomRoundRobins);
				isUpPick = 0;
			}
			if (btnAchromic[0].getValue())
				Synth.playNote(pickAttack, v);
		}
	
	// Reset Round Robin
	if (e == resetRR)
		currentRR = 1;	
	
	// Tight Mute
	if (e == 38)
	{
		Message.ignoreEvent(true);
		previousRR = currentRR;
        while (previousRR == currentRR)
            currentRR = Math.randInt(1, numCustomRoundRobins + 1);
        if (!isUpPick)
        {
            samplerA[0].asSampler().setActiveGroup(currentRR);
            samplerB[0].asSampler().setActiveGroup(previousRR);
            isUpPick = 1 - forceDownPick;
        }
        else
        {
            samplerA[0].asSampler().setActiveGroup(currentRR + numCustomRoundRobins);
            samplerB[0].asSampler().setActiveGroup(previousRR + numCustomRoundRobins);
            isUpPick = 0;
        }
		Synth.playNote(pickAttack, v);
	}
				
	// FX Keys
	if (e >= fxKeyRange[0] && e < fxKeyRange[1])
	{
		samplerA[0].asSampler().setActiveGroup(1);
		samplerB[0].asSampler().setActiveGroup(2);
	}
	
	// Dead Note Alternate Strumming
	if (e == fxKeyRange[1])
	{
		if (!btnArpBypass[0].getValue())
		{
			previousRR = currentRR;
			while (currentRR == previousRR)
				currentRR = Math.randInt(1, numCustomRoundRobins + 1);
				
			if (!isUpPick) // Down
			{
				samplerA[0].asSampler().setActiveGroup(currentRR);
				samplerB[0].asSampler().setActiveGroup(previousRR);
				isUpPick = 1 - forceDownPick;
			}
			else // Up 
			{
				samplerA[0].asSampler().setActiveGroup(currentRR + numCustomRoundRobins);
				samplerB[0].asSampler().setActiveGroup(previousRR + numCustomRoundRobins);
				isUpPick = 0;
			}
		}
	}
	
}
 function onNoteOff()
{
	local e = Message.getNoteNumber();    
    local v = Message.getVelocity();
    local numPressedKeys = Synth.getNumPressedKeys();          
    
    // Release Trigger
    local roll = Math.random(); 	
    if (e >= keyRange[0] && e <= keyRange[1] && btnAchromic[1].getValue() && roll < randomReleaseNoiseChance)
	    Synth.playNote(randomReleaseNoiseKey, Math.randInt(64, 127));	    	
}
 function onController()
{
	
}
 function onTimer()
{
	
}
 function onControl(number, value)
{
	
}
 