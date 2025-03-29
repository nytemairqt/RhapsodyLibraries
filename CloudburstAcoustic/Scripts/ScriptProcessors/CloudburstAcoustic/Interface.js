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

/* Cloudburst Acoustic Specific */

const randomNoiseChance = 0.8;
const randomReleaseNoiseChance = 0.8;
reg randomNoiseCounter = 0;
const randomNoiseKeys = [1, 2];
const releaseKeys = [3, 4];

const pnlCloudburstAcoustic = Content.getComponent("pnlCloudburstAcoustic");

const btnCloudburstAcoustic = [Content.getComponent("btnCloudburstAcousticNoisePlayer"), Content.getComponent("btnCloudburstAcousticNoiseRelease")];

pnlCloudburstAcoustic.setPaintRoutine(function(g)
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

for (b in btnCloudburstAcoustic)
    b.setLocalLookAndFeel(LAFButtonNEAT);

function onNoteOn()
{
	local e = Message.getNoteNumber();
    local v = Message.getVelocity();
    
    local roll = Math.random();
    
    if (roll <= randomNoiseChance && btnCloudburstAcoustic[0].getValue())
    {
        if (randomNoiseCounter >= 8)
        {
            Synth.playNote(Math.randInt(randomNoiseKeys[0], randomNoiseKeys[1]), v);
            randomNoiseCounter = 0;
        }
        else
            randomNoiseCounter += 1;
    }
}
 function onNoteOff()
{
	if (btnCloudburstAcoustic[1].getValue())
    {
        local roll = Math.random();
        if (roll <= randomReleaseNoiseChance)
            Synth.playNote(Math.randInt(releaseKeys[0], releaseKeys[1]), Math.randInt(1, 127));            
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
 