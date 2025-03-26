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

include("NEATBoilerplate/includes/NEATPaths.js");

/* Generic */
const LAFButtonChangePage = Content.createLocalLookAndFeel();
const LAFButtonPrev = Content.createLocalLookAndFeel();
const LAFButtonNext = Content.createLocalLookAndFeel();
const LAFButtonClose = Content.createLocalLookAndFeel();
const LAFButtonNEAT = Content.createLocalLookAndFeel();
const LAFSliderNEAT = Content.createLocalLookAndFeel();
const LAFComboBoxNEAT = Content.createLocalLookAndFeel();
const LAFButtonBypass = Content.createLocalLookAndFeel();
const LAFKeyboard = Content.createLocalLookAndFeel();

/* Sampler */
const LAFSliderSampleOffset = Content.createLocalLookAndFeel();
const LAFButtonSamplerOther = Content.createLocalLookAndFeel();
const LAFButtonSamplerReverse = Content.createLocalLookAndFeel();

/* Arp */
const LAFButtonArpReset = Content.createLocalLookAndFeel();
const LAFButtonArpInvert = Content.createLocalLookAndFeel();
const LAFButtonArpMinor = Content.createLocalLookAndFeel();
const LAFButtonArpMajor = Content.createLocalLookAndFeel();
const LAFSliderpackArpNotes = Content.createLocalLookAndFeel();
const LAFSliderpackArpOther = Content.createLocalLookAndFeel();

/* Move */

const LAFSliderMoveX = Content.createLocalLookAndFeel();
const LAFSliderMoveY = Content.createLocalLookAndFeel();
const LAFButtonChaosA = Content.createLocalLookAndFeel();
const LAFButtonChaosB = Content.createLocalLookAndFeel();
const LAFButtonChaosC = Content.createLocalLookAndFeel();
const LAFButtonChaosD = Content.createLocalLookAndFeel();
const LAFButtonChaosE = Content.createLocalLookAndFeel();
const LAFButtonChaosF = Content.createLocalLookAndFeel();
const LAFButtonChaosG = Content.createLocalLookAndFeel();

/* Colours & Path */
var path = Content.createPath();

const clrRhapsodyBlue = 0xFF1D1D21;
const clrExtradarkblue = 0xFF191933;
const clrOffWhite = 0xFFEDEDED;

// Old NEAT Player Colours
const clrBggrey = 0xFF121212;    
const clrExtradarkgrey = 0xFF171717;
const clrDarkgrey = 0xFF252525;   
const clrMidgrey = 0xFF555555;
const clrGrey = 0xFF808080;        
const clrLightgrey = 0xFFD3D3D3;    
const clrWhite = 0xFFFFFFFF;
const clrLightblue = 0xFFADD8E6;
const clrBlack = 0xFF000000;  
const clrKeyPurple = 0xFFCC96FF;

/* Utility Functions */

inline function reduced(obj, amount)
{
    return [amount, amount, obj.area[2] - 2*amount, obj.area[3] - 2* amount];
}

// Main Slider

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

// Close Button
LAFButtonClose.registerFunction("drawToggleButton", function(g, obj)
{
	var w = obj.area[2];
	var h = obj.area[3];
	g.setColour(obj.over ? clrWhite : clrLightgrey);
	g.drawLine(2, w-4, 2, h-4, 2.0);
	g.drawLine(w-4, 2, 2, h-4, 2.0); 
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

// Generic Button w/ Text
LAFButtonNEAT.registerFunction("drawToggleButton", function(g, obj)
{
	if (obj.value)
	    g.setColour(obj.over ? clrWhite : clrLightgrey);
	else
		g.setColour(obj.over ? clrGrey : clrMidgrey);
	
	g.setFont("bold", 14.0);
	g.drawAlignedText(obj.text, obj.area, "centred");
});

// Combobox Prev
LAFButtonPrev.registerFunction("drawToggleButton", function(g, obj)
{	
	g.setColour(obj.over ? Colours.white : Colours.lightgrey);
    g.fillTriangle(obj.area, 0);  
});

// Combobox Next
LAFButtonNext.registerFunction("drawToggleButton", function(g, obj)
{	
	g.setColour(obj.over ? Colours.white : Colours.lightgrey);
	g.fillTriangle(obj.area, Math.toRadians(180));   
});

// Sampler Extra
LAFButtonSamplerOther.registerFunction("drawToggleButton", function(g, obj)
{
	var w = obj.area[2];
	var h = obj.area[3];
	if (obj.value)
	    g.setColour(obj.over ? clrWhite : clrLightgrey);
	else
		g.setColour(obj.over ? clrGrey : clrMidgrey);
	g.setFont("bold", 14.0);
	g.drawAlignedText("E", obj.area, "centred");
});

// Sampler Reverse
LAFButtonSamplerReverse.registerFunction("drawToggleButton", function(g, obj)
{
	if (obj.value)
	    g.setColour(obj.over ? clrWhite : clrLightgrey);
	else
		g.setColour(obj.over ? clrGrey : clrMidgrey);
	g.setFont("bold", 14.0);
	g.drawAlignedText("REV", obj.area, "centred");
});

// Bypass Button
LAFButtonBypass.registerFunction("drawToggleButton", function(g, obj)
{
    if (obj.value)
	    g.setColour(obj.over ? clrWhite : clrLightgrey);
	else
		g.setColour(obj.over ? clrGrey : clrMidgrey);
	path.clear();
	path.loadFromData(pathBypassButton);
	g.drawPath(path, [obj.area[0] + 2, obj.area[1] + 2, obj.area[2] - 4, obj.area[3] - 4], 2);
	g.drawLine(obj.area[2] / 2, obj.area[2] / 2, 0, obj.area[3] / 2, 2.0);    
});

// ComboBoxes

LAFComboBoxNEAT.registerFunction("drawComboBox", function(g, obj)
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

// Arp Buttons & Sliderpacks

LAFButtonArpReset.registerFunction("drawToggleButton", function(g, obj)
{
    path.clear();
    path.loadFromData(pathButtonArpResetStroke);    
    g.setColour(obj.over ? clrWhite : clrLightgrey);
    g.drawPath(path, reduced(obj, 6.0), 3);
    path.clear();
    path.loadFromData(pathButtonArpResetFill);        
    g.fillPath(path, [obj.area[0] + 4, obj.area[1] + 4, obj.area[2] - 14, obj.area[3] - 14]);    
});

LAFButtonArpInvert.registerFunction("drawToggleButton", function(g, obj)
{
    var leftTrianglePosition = (obj.area[2] * 0.25) - (obj.area[2] * 0.2);
    var triangleWidth = (obj.area[2] / 3) / 2;
    var rightTrianglePosition = (obj.area[2] * 0.75) - (obj.area[2] * 0.2);
    var triangleYOffset = (obj.area[3] * 0.33) / 2;
	g.setColour(obj.over ? clrWhite : clrLightgrey);
    g.fillTriangle([leftTrianglePosition, 0 + triangleYOffset, obj.area[2] * 0.33, obj.area[3] * 0.33], Math.toRadians(0));
    g.drawLine(leftTrianglePosition + triangleWidth, leftTrianglePosition + triangleWidth, 10, obj.area[3] - 4, 2.0);
    g.fillTriangle([rightTrianglePosition, obj.area[3] * 0.66 - triangleYOffset, obj.area[2] / 3, obj.area[3] * 0.33], Math.toRadians(180));
    g.drawLine(rightTrianglePosition + triangleWidth, rightTrianglePosition + triangleWidth, triangleYOffset, obj.area[3] - 10, 2.0);    
});

LAFButtonArpMinor.registerFunction("drawToggleButton", function(g, obj)
{
    path.clear();
    path.loadFromData(pathButtonArpMinor);    
    g.setColour(obj.over ? clrWhite : clrLightgrey);
    g.fillPath(path, obj.area);
    g.setColour(clrDarkgrey);               
    g.drawPath(path, obj.area, 1.0);    
});

LAFButtonArpMajor.registerFunction("drawToggleButton", function(g, obj)
{
    path.clear();
    path.loadFromData(pathButtonArpMajor);    
    g.setColour(obj.over ? clrWhite : clrLightgrey);
    g.fillPath(path, obj.area);
    g.setColour(clrDarkgrey);               
    g.drawPath(path, obj.area, 1.0);        
});

LAFSliderpackArpNotes.registerFunction("drawLinearSlider", function(g, obj)
{        
    g.setColour(Colours.mix(clrGrey, clrLightgrey, .5));
    g.drawHorizontalLine(obj.area[3] / 2, obj.area[0], obj.area[2]);    
    if (obj.valueNormalized >= 0.5)
    {
        obj.area[1] = obj.area[1] + obj.area[3] * (1.0 - obj.valueNormalized);
        obj.area[3] = obj.area[3] / 2 - obj.area[1];
    }       
    else
    {
        obj.area[1] = obj.area[3] / 2;
        obj.area[3] = obj.area[3] / 2 - obj.area[3] / 2 * (2.0 * obj.valueNormalized);
    }
    g.setColour(Colours.withAlpha(clrWhite, .8));
    g.fillRoundedRectangle(obj.area, 2);
});

LAFSliderpackArpOther.registerFunction("drawLinearSlider", function(g, obj)
{
    g.setColour(Colours.mix(Colours.withAlpha(clrBlack, .7), Colours.withAlpha(clrLightgrey, .4), obj.valueNormalized));
    g.fillRoundedRectangle([0, obj.area[1] + obj.area[3] * (1.0 - obj.valueNormalized), obj.area[2], obj.area[3]], 2.0);
    g.setColour(Colours.withAlpha(clrWhite, .8));
    g.drawRoundedRectangle([0, obj.area[1] + obj.area[3] * (1.0 - obj.valueNormalized), obj.area[2], obj.area[3]], 2.0, 2.0);
});

// Move Sliders & Buttons

LAFSliderMoveX.registerFunction("drawRotarySlider", function(g, obj)
{
    var w = obj.area[2];
    var h = obj.area[3];
    var val = obj.valueNormalized;
    g.setColour(clrGrey);
    g.drawRoundedRectangle([Math.range(w * val, 3, w - 6), h / 2 - 2, 6, 4], 1.0, 1.0);          
});

LAFSliderMoveY.registerFunction("drawRotarySlider", function(g, obj)
{
	var w = obj.area[2];
	var h = obj.area[3];
	var val = obj.valueNormalized;
	g.setColour(clrGrey);
	g.drawRoundedRectangle([w / 2 - 2, Math.range(h - (h * val), 3, h - 6), 4, 6], 1.0, 1.0);       
});

LAFButtonChaosA.registerFunction("drawToggleButton", function(g, obj)
{
    g.setColour(obj.over ? Colours.withAlpha(clrWhite, 0.08) : Colours.withAlpha(clrWhite, 0.05));
    if (obj.value)
        g.setColour(Colours.withAlpha(clrWhite, 0.15));
    path.loadFromData(pathButtonChaosPolygon);
    g.fillPath(path, obj.area);
    g.setColour(obj.over ? clrWhite : clrLightgrey);
    path.loadFromData(pathButtonChaosTypeA);
    g.drawPath(path, [8, 16, obj.area[2] - 16, obj.area[3] - 32], 2.0);
});

LAFButtonChaosB.registerFunction("drawToggleButton", function(g, obj)
{
    g.setColour(obj.over ? Colours.withAlpha(clrWhite, 0.08) : Colours.withAlpha(clrWhite, 0.05));
    if (obj.value)
        g.setColour(Colours.withAlpha(clrWhite, 0.15));
    path.loadFromData(pathButtonChaosPolygon);
    g.fillPath(path, obj.area);
    g.setColour(obj.over ? clrWhite : clrLightgrey);
    path.loadFromData(pathButtonChaosTypeB);
    g.drawPath(path, [12, 12, obj.area[2] - 24, obj.area[3] - 24], 2.0);
});

LAFButtonChaosC.registerFunction("drawToggleButton", function(g, obj)
{
    g.setColour(obj.over ? Colours.withAlpha(clrWhite, 0.08) : Colours.withAlpha(clrWhite, 0.05));
    if (obj.value)
        g.setColour(Colours.withAlpha(clrWhite, 0.15));
    path.loadFromData(pathButtonChaosPolygon);
    g.fillPath(path, obj.area);
    g.setColour(obj.over ? clrWhite : clrLightgrey);
    g.drawLine(20, 20, obj.area[3] - 26, 20, 2.0);
    g.drawLine(20, obj.area[2] - 20, 20, 20, 2.0);
    g.drawLine(obj.area[2] - 20, obj.area[2] - 20, 20, obj.area[3] - 20, 2.0);
    g.drawLine(obj.area[2] - 20, 26, obj.area[3] - 20, obj.area[3] - 20, 2.0);
    g.fillTriangle([22, obj.area[3] - 25, 10, 10], Math.toRadians(270));
});

LAFButtonChaosD.registerFunction("drawToggleButton", function(g, obj)
{
    g.setColour(obj.over ? Colours.withAlpha(clrWhite, 0.08) : Colours.withAlpha(clrWhite, 0.05));
    if (obj.value)
        g.setColour(Colours.withAlpha(clrWhite, 0.15));
    path.loadFromData(pathButtonChaosPolygon);
    g.fillPath(path, obj.area);
    g.setColour(obj.over ? clrWhite : clrLightgrey);
    path.loadFromData(pathButtonChaosTypeD);
    g.drawPath(path, [19, 19, obj.area[2] - 38, obj.area[3] - 38], 2.0);
    g.fillTriangle([22, obj.area[3] - 25, 10, 10], Math.toRadians(270));
});

LAFButtonChaosE.registerFunction("drawToggleButton", function(g, obj)
{
    g.setColour(obj.over ? Colours.withAlpha(clrWhite, 0.08) : Colours.withAlpha(clrWhite, 0.05));
    if (obj.value)
        g.setColour(Colours.withAlpha(clrWhite, 0.15));
    path.loadFromData(pathButtonChaosPolygon);
    g.fillPath(path, obj.area);
    g.setColour(obj.over ? clrWhite : clrLightgrey);
    path.loadFromData(pathButtonChaosTypeE);
    g.drawPath(path, [15, 15, obj.area[2] - 30, obj.area[3] - 30], 2.0);
});

LAFButtonChaosF.registerFunction("drawToggleButton", function(g, obj)
{
    g.setColour(obj.over ? Colours.withAlpha(clrWhite, 0.08) : Colours.withAlpha(clrWhite, 0.05));
    if (obj.value)
        g.setColour(Colours.withAlpha(clrWhite, 0.15));
    path.loadFromData(pathButtonChaosPolygon);
    g.fillPath(path, obj.area);
    g.setColour(obj.over ? clrWhite : clrLightgrey);
    path.loadFromData(pathButtonChaosTypeF);
    g.drawPath(path, [17, 17, obj.area[2] - 34, obj.area[3] - 34], 2.0);
    g.fillTriangle([12, 12, 8, 8], Math.toRadians(277));
    g.fillTriangle([36, 38, 8, 8], Math.toRadians(100));

});

LAFButtonChaosG.registerFunction("drawToggleButton", function(g, obj)
{
    g.setColour(obj.over ? Colours.withAlpha(clrWhite, 0.08) : Colours.withAlpha(clrWhite, 0.05));
    if (obj.value)
        g.setColour(Colours.withAlpha(clrWhite, 0.15));
    path.loadFromData(pathButtonChaosPolygon);
    g.fillPath(path, obj.area);
    g.setColour(obj.over ? clrWhite : clrLightgrey);
    path.loadFromData(pathButtonChaosTypeG);
    g.drawPath(path, [17, 17, obj.area[2] - 34, obj.area[3] - 34], 2.0);
    g.fillTriangle([12, 12, 8, 8], Math.toRadians(277));
    g.fillTriangle([36, 38, 8, 8], Math.toRadians(100));
});

// Rhapsody Overrides

LookAndFeel.laf.registerFunction("drawNumberTag", function(g, obj)
{
	g.setColour(clrDarkgrey);
	g.fillRoundedRectangle([obj.area[2], obj.area[1], 0, 0], 2.0);
	g.setColour(clrWhite);
	g.setFont("bold", 12.0);
	switch (obj.macroIndex)
	{
		case 0:
			g.drawAlignedText("X", [obj.area[2] - 10, obj.area[1], 10, 10], "centred");
			break;		
		case 1:
			g.drawAlignedText("X-", [obj.area[2] - 10, obj.area[1], 10, 10], "centred");
			break;		
		case 2:
			g.drawAlignedText("Y", [obj.area[2] - 10, obj.area[1], 10, 10], "centred");
			break;		
		case 3:
			g.drawAlignedText("Y-", [obj.area[2] - 10, obj.area[1], 10, 10], "centred");
			break;		
		case 4:
			g.drawAlignedText("A", [obj.area[2] - 10, obj.area[1], 10, 10], "centred");
			break;		
		case 5:
			g.drawAlignedText("B", [obj.area[2] - 10, obj.area[1], 10, 10], "centred");
			break;		
		case 6:
			g.drawAlignedText("V", [obj.area[2] - 10, obj.area[1], 10, 10], "centred");
			break;		
		case 7:
			g.drawAlignedText("R", [obj.area[2] - 10, obj.area[1], 10, 10], "centred");
			break;
	}    
});

for (i=0; i<128; i++)
{
	// Clear Rhapsody Default
	Engine.setKeyColour(i, Colours.withAlpha(Colours.black, 0.1));		
}