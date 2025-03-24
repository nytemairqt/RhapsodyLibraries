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

/* Portal Specific */

const pnlMachineTribes = Content.getComponent("pnlMachineTribes");
const btnMachineTribes = [Content.getComponent("btnMachineTribesWriteArpVelocity")];

pnlMachineTribes.setPaintRoutine(function(g)
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

for (b in btnMachineTribes)
	b.setLocalLookAndFeel(LAFButtonNEAT);

function onNoteOn()
{
    local e = Message.getNoteNumber();
    local v = Message.getVelocity();
    
    if (btnMachineTribes[0].getValue())
    	sldrpckArp[1].setAllValues(v);

    if (e >= 60 && e <= 95)
    {
        local currentRR = arp.getAttribute(arp.CurrentValue);  
        samplerA[0].asSampler().enableRoundRobin(false);
        samplerA[0].asSampler().setActiveGroup(1);
        Message.ignoreEvent(e);
        Synth.playNote(e, v); 
    }
}
 function onNoteOff()
{
	local e = Message.getNoteNumber();    
    local v = Message.getVelocity();
    local numPressedKeys = Synth.getNumPressedKeys();   
    local activeGroup;

    if (numPressedKeys > 1)
    {
        samplerA[0].asSampler().enableRoundRobin(false);
        samplerA[0].asSampler().setActiveGroup(samplerA[0].asSampler().getActiveRRGroup());
        samplerA[0].asSampler().enableRoundRobin(true);          
    }
    else
    {
        samplerA[0].asSampler().enableRoundRobin(false);
        samplerA[0].asSampler().setActiveGroup(0);
        samplerA[0].asSampler().enableRoundRobin(true);  
    }
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
 