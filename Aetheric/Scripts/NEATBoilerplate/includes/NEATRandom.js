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


}
