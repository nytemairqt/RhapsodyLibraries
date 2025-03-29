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

/* Portal Specific */

const pnlPortal = Content.getComponent("pnlPortal");
const btnPortal = [Content.getComponent("btnPortalWriteArpVelocity")];

inline function colourPitchKeys()
{
    for (i=24; i<49; i++)
        Engine.setKeyColour(i, Colours.withAlpha(Colours.lime, .5));
}

colourPitchKeys();
Engine.setKeyColour(36, Colours.withAlpha(Colours.deepskyblue, 0.5));

pnlPortal.setPaintRoutine(function(g)
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

for (b in btnPortal)
	b.setLocalLookAndFeel(LAFButtonNEAT);

for (i=0; i<128; i++)
{
    // Clear Keys
    Engine.setKeyColour(i, Colours.withAlpha(Colours.black, 0.8));      
        
    // Portal Specific
    if (i >= 60 && i < 76)
        Engine.setKeyColour(i, Colours.withAlpha(Colours.deepskyblue, 0.5));        
        
    if (i >= 84 && i < 100)
        Engine.setKeyColour(i, Colours.withAlpha(Colours.yellow, 0.5));             
}

function onNoteOn()
{
    local e = Message.getNoteNumber();
    local v = Message.getVelocity();

	if (e >= 24 && e <= 48)
    {
        colourPitchKeys();
        Engine.setKeyColour(e, Colours.withAlpha(Colours.deepskyblue, 0.5));            
        samplerA[6].setIntensity(e-36);
        Message.ignoreEvent(e);
    }
    
    if (btnPortal[0].getValue())
    	sldrpckArp[1].setAllValues(v);
}
 function onNoteOff()
{
	local e = Message.getNoteNumber();    
    local v = Message.getVelocity();
    local numPressedKeys = Synth.getNumPressedKeys();   
    local activeGroup;

    if (e >= 24 & e <= 48)
    {
        Message.ignoreEvent(e);
        activeGroup = samplerA[0].asSampler().getActiveRRGroup();
        samplerA[0].asSampler().enableRoundRobin(false);
        samplerA[0].asSampler().setActiveGroup(activeGroup);
        samplerA[0].asSampler().enableRoundRobin(true);
    }
    else
    {
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
 