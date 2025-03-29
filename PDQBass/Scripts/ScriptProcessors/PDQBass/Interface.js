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
include("../../_NEATBoilerplate/NEATRhapsodyRefs.js");
include("../../_NEATBoilerplate/NEATRandom.js");
include("../../_NEATBoilerplate/NEATUi.js");
include("../../_NEATBoilerplate/NEATChaosEngine.js");
include("../../_NEATBoilerplate/NEATTooltip.js");
include("../../_NEATBoilerplate/NEATStoreButton.js");

/* PDQ Bass Specific */

const LAFSliderPDQBass = Content.createLocalLookAndFeel();
const pnlPDQBass = Content.getComponent("pnlPDQBass");
const btnPDQBass = [Content.getComponent("btnPDQBassForceDownpick")];
const knbPDQBass = [Content.getComponent("knbPDQBassVelMin"),
                    Content.getComponent("knbPDQBassVelMax"),
                    Content.getComponent("knbPDQBassPMMin"),
                    Content.getComponent("knbPDQBassPMMax"),
                    Content.getComponent("knbPDQBassFingerMin"),
                    Content.getComponent("knbPDQBassFingerMax"),
                    Content.getComponent("knbPDQBassAltPickMin"),
                    Content.getComponent("knbPDQBassAltPickMax"),
                    Content.getComponent("knbPDQBassSlappedMin"),
                    Content.getComponent("knbPDQBassSlappedMax")];

reg currentRR = 1;
reg previousRR;
reg isUpPick = 0;
reg forceDownPick = 0;

reg velNew = 127;
reg velMin;
reg velMax;
reg velMinPM;
reg velMaxPM;
reg velMinFinger;
reg velMaxFinger;
reg velMinAltPick;
reg velMaxAltPick;
reg velMinSlapped;
reg velMaxSlapped;

const resetRR = 36;
const keyRange = [41, 85];
const numCustomRoundRobins = 5;

// Disable RR

samplerA[0].asSampler().enableRoundRobin(false);

inline function onknbPDQBassControl(component, value)
{
	switch (component)
	{
		case knbPDQBass[0]: // Velocity Min
			if (value == knbPDQBass[1].getValue())
				knbPDQBass[1].setValue(value + 1);
		case knbPDQBass[1]: // Velocity Max
			if (value == knbPDQBass[0].getValue())
				knbPDQBass[0].setValue(value - 1);		
		case knbPDQBass[2]: // Palm Mute Min
			if (value == knbPDQBass[3].getValue())
				knbPDQBass[3].setValue(value + 1);
		case knbPDQBass[3]: // Palm Mute Max
			if (value == knbPDQBass[2].getValue())
				knbPDQBass[2].setValue(value - 1);
		case knbPDQBass[4]: // Finger Min
			if (value == knbPDQBass[5].getValue())
				knbPDQBass[5].setValue(value + 1);
		case knbPDQBass[5]: // Finger Max
			if (value == knbPDQBass[4].getValue())
				knbPDQBass[4].setValue(value - 1);
		case knbPDQBass[6]: // Alt. Pick Min
			if (value == knbPDQBass[7].getValue())
				knbPDQBass[7].setValue(value + 1);
		case knbPDQBass[7]: // Alt. Pick Max
			if (value == knbPDQBass[6].getValue())
				knbPDQBass[6].setValue(value - 1);	
		case knbPDQBass[8]: // Slapped Min
			if (value == knbPDQBass[9].getValue())
				knbPDQBass[9].setValue(value + 1);
		case knbPDQBass[9]: // Slapped Max
			if (value == knbPDQBass[8].getValue())
				knbPDQBass[8].setValue(value - 1);															
	}
}

LAFSliderPDQBass.registerFunction("drawRotarySlider", function(g, obj)
{
    g.fillAll(Colours.white);
    g.setColour(Colours.black);
    g.setFont("bold", 13.0);
    g.drawAlignedText(Math.round(obj.value), obj.area, "centred");
});

for (k in knbPDQBass)
{
	k.setControlCallback(onknbPDQBassControl);
	k.setLocalLookAndFeel(LAFSliderPDQBass);
}	

pnlPDQBass.setPaintRoutine(function(g)
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

for (b in btnPDQBass)
	b.setLocalLookAndFeel(LAFButtonNEAT);

for (i=0; i<128; i++)
{
	// Clear Rhapsody Default
	Engine.setKeyColour(i, Colours.withAlpha(Colours.black, 0.1));

	// Main Keys
	if (i < 41 || i > 85)
		Engine.setKeyColour(i, Colours.withAlpha(Colours.black, 0.8));		
		
	// PDQBass Specific
	if (i == 36)
		Engine.setKeyColour(i, Colours.withAlpha(0xFFCC96FF, .5));		
}

function onNoteOn()
{
	local e = Message.getNoteNumber();
	local v = Message.getVelocity();	
	
	forceDownPick = btnPDQBass[0].getValue();	
	velMin = knbPDQBass[0].getValue();
	velMax = knbPDQBass[1].getValue();
	velMinPM = knbPDQBass[2].getValue();
	velMaxPM = knbPDQBass[3].getValue();
	velMinFinger = knbPDQBass[4].getValue();
	velMaxFinger = knbPDQBass[5].getValue();
	velMinAltPick = knbPDQBass[6].getValue();
	velMaxAltPick = knbPDQBass[7].getValue();
	velMinSlapped = knbPDQBass[8].getValue();
	velMaxSlapped = knbPDQBass[9].getValue();
	
	// Non-Repeating Round-Robin
	previousRR = currentRR;
    while (currentRR == previousRR)
        currentRR = Math.randInt(1, numCustomRoundRobins + 1);
    samplerA[0].asSampler().setActiveGroup(currentRR);
	
	// Velocity Limiters
	if (v < velMin)
		v = velMin;
	if (v > velMax)
		v = velMax;			
 
 	// Palm Mute
 	if (v >= velMinPM && v <= velMaxPM) 
	{
		velNew = isUpPick ? 20 : 10;		
		Message.setVelocity(velNew);
		
		if (isUpPick)
			isUpPick = 0;
		else
			isUpPick = 1 - forceDownPick;	
	}
	
	// Finger
 	if (v >= velMinFinger && v <= velMaxFinger) 
	 	Message.setVelocity(52); 	
	 	
	// Alt. Pick
	if (v >= velMinAltPick && v <= velMaxAltPick) 
	{
		velNew = isUpPick ? 114 : 80;		
		Message.setVelocity(velNew);
		
		if (isUpPick)
			isUpPick = 0;
		else
			isUpPick = 1 - forceDownPick;		
	}
	
	// Slapped
	if (v >= velMinSlapped && v <= velMaxSlapped) 
		Message.setVelocity(127);
        	
	// Reset Round Robin
	if (e == resetRR)
		currentRR = 1;	
}
 function onNoteOff()
{
	local e = Message.getNoteNumber();    
    local v = Message.getVelocity();
    local numPressedKeys = Synth.getNumPressedKeys();             	
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
 