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

namespace Random
{
	// after ui refs
	// after ui control

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

	inline function randomizeComponentList(componentList)
	{
		for (c in componentList)
			randomizeComponent(c);
	}

	inline function randomizeComponentListWithinRange(jsonObject)
	{
		/*
			takes a json object
			eg:

			{
				components: [knbA, knbB, knbC],
				ranges: [[0, 1], [0, 1], [-100, 0]]
			}
		*/

		for (i=0; i<jsonObject["components"].length; i++)
		{
			randomizeComponentsListWithinRange(jsonObject["components"][i], jsonObject["ranges"][i]); // maybe???
		}
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
}
