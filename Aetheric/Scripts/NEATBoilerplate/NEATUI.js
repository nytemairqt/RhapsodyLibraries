/*
    Copyright 2023, 2024 iamlamprey

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

include("NEATBoilerplate/NEATLookAndFeel.js");
include("NEATBoilerplate/NEATModules.js");
include("NEATBoilerplate/NEATUIConstructors.js");


inline function onBtnSamplePageControl(component, value)
{
	if (value)
		Console.print("Clicked");
}

// Create UI Elements

const btnSamplePage = Content.getComponent("btnSamplePage");
const btnFXPage = Content.getComponent("btnFXPage");
const btnArpPage = Content.getComponent("btnArpPage");
const btnMovePage = Content.getComponent("btnMovePage");
const btnRandomPage = Content.getComponent("btnRandomPage");

btnSamplePage.setLocalLookAndFeel(LAFButtonSwitchPage);
btnSamplePage.setLocalLookAndFeel(LAFButtonSwitchPage);
btnFXPage.setLocalLookAndFeel(LAFButtonSwitchPage);
btnArpPage.setLocalLookAndFeel(LAFButtonSwitchPage);
btnMovePage.setLocalLookAndFeel(LAFButtonSwitchPage);
btnRandomPage.setLocalLookAndFeel(LAFButtonSwitchPage);

const pnlBodyW = pnlBody.getWidth();
const pnlBodyH = pnlBody.getHeight();

const pnlSamplers = [Content.getComponent("pnlSamplerA"), Content.getComponent("pnlSamplerB"), Content.getComponent("pnlSamplerC")];

for (p in pnlSamplers)
{
	p.setPaintRoutine(function(g)
	{
		var gradientData = [pnlBodyColourTop, 0, 0, pnlBodyColour, 0, this.getHeight(), false];
		//g.setGradientFill(gradientData);
		
		g.setColour(clrRhapsodyBlue);
		g.fillRoundedRectangle([0, 0, this.getWidth(), this.getHeight()], 10.0);
		
		var noiseData = {
				"alpha" : .1,
				"monochromatic" : false,
				"scaleFactor" : 2,
				"area" : [0, 13, this.getWidth(), this.getHeight() - 16]		
			};
			
		g.addNoise(noiseData);
	});
}

/* Rhapsody Stuff */

// Rhapsody Gain
inline function onknbMasterGainControl(component, value)
{
	/* might cause issues */
	if (isDefined(rhapsodyModules[0]))
		rhapsodyModules[0].setAttribute(rhapsodyModules[0].Gain, value);
}

// Rhapsody Pan
inline function onknbMasterPanControl(component, value)
{
	/* might cause issues */
	if (isDefined(rhapsodyModules[0]))
		rhapsodyModules[0].setAttribute(rhapsodyModules[0].Balance, value);
}

Content.getComponent("knbMasterGain").setControlCallback(onknbMasterGainControl);
Content.getComponent("knbMasterPan").setControlCallback(onknbMasterPanControl);

/* Key Colours */

for (i = 24; i < 89; i++)
   	Engine.setKeyColour(i, Colours.withAlpha(Colours.lightblue, 1.0));

for (i=89; i<100; i++)   	
	Engine.setKeyColour(i, Colours.withAlpha(Colours.lightgreen, 1.0));
	
	

	
	