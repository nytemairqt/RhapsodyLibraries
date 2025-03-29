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

include("../../_NEATBoilerplate/NEATMacroAttributes.js");

namespace Random
{
	reg macroObject = [{}];
	reg json = [];

	// Generic
	inline function randomizeComponent(component)
	{
		local min = component.get("min");
		local max = component.get("max");
		local newValue = min + (Math.random() * (max - min));
		component.setValue(newValue);
		component.changed();
	}
	
	inline function randomizeComponentWithinRange(component, min, max)
	{
		local newValue = min + (Math.random() * (max - min));
		component.setValue(newValue);
		component.changed();
	}
	
	inline function randomizeButton(component)
	{
		local roll = Math.random();
		if (roll <= 0.5)
			component.setValue(0);
		else
			component.setValue(1);
		component.changed();
	}	

	inline function randomizeComponentList(componentList)
	{
		for (c in componentList)
			randomizeComponent(c);
	}
	
	inline function randomizeButtonList(componentList)
	{
		for (c in componentList)
			randomizeButton(c);
	}

	inline function resetComponent(component)
	{
		component.setValue(component.get("defaultValue"));
		component.changed();
	}
	
	inline function resetComponentList(list)
	{
		for (c in list)
		{
			c.setValue(c.get("defaultValue"));
			c.changed();
		}						
	}
	
	inline function randomizeAHDSRStaccato(list)
	{
		randomizeComponentWithinRange(list[0], 5, 150); // Attack
		randomizeComponentWithinRange(list[1], 5, 5000); // Decay
		randomizeComponentWithinRange(list[2], -100, 0); // Sustain
		randomizeComponentWithinRange(list[3], 5, 2000); // Release
	}
	
	inline function randomizeAHDSRSustain(list)
	{
		randomizeComponentWithinRange(list[0], 5, 150); // Attack
		randomizeComponentWithinRange(list[1], 5, 5000); // Decay
		randomizeComponentWithinRange(list[2], -8, 0); // Sustain
		randomizeComponentWithinRange(list[3], 5, 2000); // Release
	}
	
	inline function randomizeAHDSRPad(list)
	{
		randomizeComponentWithinRange(list[0], 5, 20000); // Attack
		randomizeComponentWithinRange(list[1], 5, 5000); // Decay
		randomizeComponentWithinRange(list[2], 0, 0); // Sustain
		randomizeComponentWithinRange(list[3], 5, 20000); // Release
	}
	
	inline function randomizePitchOctave(component)
	{
		local roll = Math.randInt(1, 4);
		switch (roll)
		{
			case 1:
				component.setValue(-12);
			case 2:
				component.setValue(0);
			case 3:
				component.setValue(12);
		}
		component.changed();
	}
	
	inline function randomizeSliderpack(component, min, max)
	{
		for (s=0; s<component.getNumSliders(); s++)
		{
			local value = min + (Math.random() * (max - min));
			component.setSliderAtIndex(s, value);			
		}
		component.changed();
	}		
	
	inline function resetSliderpack(component, resetValue)
	{
		component.setAllValues(resetValue);
		component.changed();
	}
	
	inline function randomizeMacroConnectionList()
	{		
		local obj = {};
		local index = 0;
		local min = 0.0;
		local max = 0.0;
		local start = 0.0;
		local end = 0.0;
		local roll = 0.0;
		local component = 0;
		local interval = 0.0;
		
		json.clear();
		
		for (a in macroAttributes)
		{
			roll = Math.random();
			if (roll > .5)
				continue;
				
			component = Content.getComponent(a);

			index = Math.randInt(0, 8);
			min = component.get("min");
			max = component.get("max");
			interval = component.get("stepSize");
			
			start = min + (Math.random() * (max - min));
			end = start + (Math.random() * (max- start));
						
			obj = {
				"MacroIndex" : index,
				"Processor" : "Interface",
				"Attribute" : a,	
				"FullStart" : min,
				"FullEnd" : max,
				"Inverted" : false,
				"Interval" : interval,
				"Skew" : 1.0,
				"Start" : start,
				"End" : end			
			};
			
			json.push(obj);
		}
		
		macroHandler.setMacroDataFromObject(json);				
	}
	
	inline function randomizeMacroConnectionValues()
	{
		macroObject = macroHandler.getMacroDataObject();
		local min = 0.0;
		local max = 0.0;
		local start = 0.0;
		local end = 0.0;			
		
		for (o in macroObject)
		{
			local component = Content.getComponent(o["Attribute"]);
			min = component.get("min");
			max = component.get("max");
						
			start = min + (Math.random() * (max - min));
			end = start + (Math.random() * (max - start));
			
			o["FullStart"] = min;
			o["FullEnd"] = max;
			o["Start"] = start;
			o["End"] = end;
		}
						
		macroHandler.setMacroDataFromObject(macroObject);
	}
	
	inline function clearMacroConnections()
	{
		if (isDefined(macroHandler.getMacroDataObject()));
		{
			macroObject = [];
			macroHandler.setMacroDataFromObject(macroObject);
		}
	}
}
