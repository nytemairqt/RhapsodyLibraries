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

const pnlStore = createChildPanel("pnlStore", 546, 21, 18, 18, "pnlHeader");

pnlStore.set("tooltip", "Browse Instruments.");
pnlStore.set("allowCallbacks", "Clicks & Hover");

pnlStore.setMouseCallback(function(event)
{
	if (event.clicked)
	{
		Engine.openWebsite("https://www.iamlamprey.com/");
	}

	this.data.hover = event.hover;
	this.repaint();	
});

pnlStore.setPaintRoutine(function(g)
{
	g.setColour(Colours.withAlpha(0xFFCFCFCF, this.data.hover ? 1.0 : 0.8));
	
	var p = Content.createPath();
	
	p.loadFromData(pathMindIcon);
	
	g.drawPath(p, [0, 0, this.getWidth(), this.getHeight()], 1.5);	
});