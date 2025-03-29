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

for (i=0; i<128; i++)
{
    // Clear Rhapsody Default
    Engine.setKeyColour(i, Colours.withAlpha(Colours.black, 0.1));

    // Main Keys
    if (i < 24 || i > 72)
        Engine.setKeyColour(i, Colours.withAlpha(Colours.black, 0.8));              
}

function onNoteOn()
{
	
}
 function onNoteOff()
{
	
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
 