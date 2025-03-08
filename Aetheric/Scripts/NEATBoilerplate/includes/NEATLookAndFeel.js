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

include("NEATBoilerplate/includes/NEATPaths.js");

const LAFSliderNEAT = Content.createLocalLookAndFeel();
const LAFSliderSampleOffset = Content.createLocalLookAndFeel();
const LAFButtonPrev = Content.createLocalLookAndFeel();
const LAFButtonNext = Content.createLocalLookAndFeel();
const LAFButtonChangePage = Content.createLocalLookAndFeel();
const LAFComboBoxSampler = Content.createLocalLookAndFeel();
const LAFButtonBypass = Content.createLocalLookAndFeel();


const pnlBody = Content.getComponent("pnlBody");

//const pnlBodyColour = 0xff2f2f34;
//const pnlBodyColour = 0xff141414;
//const pnlBodyColourTop = 0xFF1D1F1F;
//const pnlBodyColourTop = 0xFF37373C;
//const pnlBodyColourDark = 0xFF2C2C30;
//const offWhite = 0xFFEDEDED;

const clrRhapsodyBlue = 0xFF1D1D21;
const clrOffWhite = 0xFFEDEDED;

// Old NEAT Player Colours in case I need them...
const clrBggrey = 0xFF121212;    
const clrExtradarkgrey = 0xFF171717;
const clrDarkgrey = 0xFF252525;   
const clrMidgrey = 0xFF555555;
const clrGrey = 0xFF808080;        
const clrLightgrey = 0xFFD3D3D3;    
const clrWhite = 0xFFFFFFFF;
const clrLightblue = 0xFFADD8E6;
const clrBlack = 0xFF000000;  

inline function reduced(obj, amount)
{
    return [amount, amount, obj.area[2] - 2*amount, obj.area[3] - 2* amount];
}

//Slider Main

LAFSliderNEAT.registerFunction("drawRotarySlider", function(g, obj)
{
    var ringWidth = obj.area[2] / 16;    
    
    // Background    
    g.setColour(0x33000000);
    g.fillEllipse(reduced(obj, ringWidth * 2.0));
    
    // Arc
    var sliderRing2 = Content.createPath();
    var sliderRing3 = Content.createPath();

    sliderRing2.startNewSubPath(0.5, 1.0);
    sliderRing2.addArc([0.0, 0.0, 1.0, 1.0], -Math.PI*0.75, Math.PI * 0.75);
    sliderRing3.startNewSubPath(0.0, 0.0);
    sliderRing3.startNewSubPath(1.0, 1.0);  

    var start = -Math.PI*0.75;

    // Unfilled ring
    sliderRing3.addArc([0.0, 0.0, 1.0, 1.0], start, Math.max(start, start + Math.PI * 1.5 * obj.valueNormalized));
    g.setColour(obj.hover ? 0xFF292929 : 0xFF262626);
    g.drawPath(sliderRing2, reduced(obj, ringWidth), ringWidth * 2);
   	
   	
    //g.setColour(obj.hover ? 0xFFD0E6E6 : 0xFFB1C1C1);
    g.setColour(obj.hover ? clrOffWhite : Colours.lightgrey);
    g.drawPath(sliderRing3, reduced(obj, ringWidth), ringWidth * (1.6));
    
    g.rotate((1.0 - (obj.valueNormalized - 0.02)) * -1.5 * Math.PI, [obj.area[2] / 2, obj.area[3] / 2]);  
    
    // Center Ellipse        
    g.setColour(0xFF1C1C1C);
    g.fillEllipse(reduced(obj, obj.area[2] * .86));

    // Value line
    g.setColour(Colours.lightgrey);        
    g.drawLine(obj.area[2] * .65, obj.area[2] * .83, obj.area[3] * .65, obj.area[3] * .83, 3);     
});

// Panel Body
pnlBody.setPaintRoutine(function(g)
{
	this.loadImage("{PROJECT_FOLDER}background.jpg", "backgroundImage");
	g.setOpacity(1.0);
	g.drawImage("backgroundImage", [0, 0, this.getWidth(), this.getHeight()], 0, 0);	
});

// Prev Profile
LAFButtonPrev.registerFunction("drawToggleButton", function(g, obj)
{	
	g.setColour(obj.over ? Colours.white : Colours.lightgrey);
    g.fillTriangle(obj.area, 0);  
});

// Next Profile
LAFButtonNext.registerFunction("drawToggleButton", function(g, obj)
{	
	g.setColour(obj.over ? Colours.white : Colours.lightgrey);
	g.fillTriangle(obj.area, Math.toRadians(180));   
});

// Change Page
LAFButtonChangePage.registerFunction("drawToggleButton", function(g, obj)
{
	var w = obj.area[2];
	var h = obj.area[3];
	
	g.setFont("bold", 14.0);
	g.setColour(obj.over ? 0xFFE2E3F3 : Colours.grey);
	if (obj.value)
		g.setColour(0xFFE2E3F3);
		
	g.drawAlignedText(obj.text, [0, 0, w, h], "centred");
});

//Bypass Button

LAFButtonBypass.registerFunction("drawToggleButton", function(g, obj)
{
	var path = Content.createPath();

    if (obj.value)
	    g.setColour(obj.over ? clrWhite : clrLightgrey);
	else
		g.setColour(obj.over ? clrGrey : clrMidgrey);
	path.clear();
	path.loadFromData(powerButtonData);
	g.drawPath(path, [obj.area[0] + 2, obj.area[1] + 2, obj.area[2] - 4, obj.area[3] - 4], 2);
	g.drawLine(obj.area[2] / 2, obj.area[2] / 2, 0, obj.area[3] / 2, 2.0);    
});

//ComboBoxes

LAFComboBoxSampler.registerFunction("drawComboBox", function(g, obj)
{
    g.setColour(obj.hover ? Colours.withAlpha(clrWhite, .1) : Colours.withAlpha(clrWhite, .05));
    g.fillRoundedRectangle(obj.area, 2.0);

    g.setColour(Colours.withAlpha(clrWhite, .8));
    g.setFont("Arial Bold", 13.0);
    if (obj.text == "(no choices)")
        g.drawAlignedText("Select", obj.area, "centred");
    else
        g.drawAlignedText(obj.text, obj.area, "centred");

});

// Sample Start Offset

LAFSliderSampleOffset.registerFunction("drawRotarySlider", function(g, obj)
{
    g.setColour(clrLightblue);
    if (obj.hover)
    {
    	g.drawLine(obj.area[2] * obj.valueNormalized, obj.area[2] * obj.valueNormalized, 0, obj.area[3], 4.0);
        g.setColour(Colours.withAlpha(clrLightgrey, 0.04));
        g.fillRoundedRectangle(obj.area, 1.0);
    }
    else
    	g.drawLine(obj.area[2] * obj.valueNormalized, obj.area[2] * obj.valueNormalized, 0, obj.area[3], 1.0);
    g.setColour(Colours.withAlpha(clrDarkgrey, .7));
    g.fillRoundedRectangle([0, 0, obj.area[2] * obj.valueNormalized, obj.area[3]], 2.0);
});
