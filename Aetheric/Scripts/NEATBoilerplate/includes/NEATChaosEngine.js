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

namespace chaosEngine
{
    const chaosTimer = Engine.createTimerObject();
    reg chaosType = 1;
    reg chaosXTarget;
    reg chaosYTarget;
    reg chaosStage = 1;
    reg chaosStageTwister = 1;
    reg chaosRate;
    reg chaosIntensity;
    reg chaosXDistance;
    reg chaosYDistance;

    // Functions

    //X Drift 
    inline function chaosXDrift()
    {
        local x = knbMoveX.getValue();
        local y = knbMoveY.getValue();
        switch (chaosStage)
        {
            case 1: //Sets middle position
                knbMoveX.setValue(50);
                chaosStage = 2;
            	break;
            
            case 2: //Travelling Right
                chaosXTarget = 50 + chaosIntensity;
                chaosXDistance = chaosXTarget - x;                
                if (x < chaosXTarget)
                {
                    if (chaosXDistance < chaosRate)
                    {
                        knbMoveX.setValue(x + chaosXDistance);
                        chaosStage = 3;
                    }
                    else
                        knbMoveX.setValue(x + chaosRate);
                }                    
                else
                    chaosStage = 3;
            	break;
            
            case 3: //Travelling Left
                chaosXTarget = 50 - chaosIntensity;
                chaosXDistance = x - chaosXTarget;                
                if (x > chaosXTarget)
                    if (chaosXDistance < chaosRate)
                    {
                        knbMoveX.setValue(x - chaosXDistance);
                        chaosStage = 2;
                    }
                    else 
                        knbMoveX.setValue(x - chaosRate);
                else
                    chaosStage = 2;
            	break;
        }

        knbMoveX.changed();
    }

    //Y Drift 
    inline function chaosYDrift()
    {
        local x = knbMoveX.getValue();
        local y = knbMoveY.getValue();
        switch (chaosStage)
        {
            case 1: //Sets middle position
                knbMoveY.setValue(50);
                chaosStage = 2;
            	break;            
            case 2: //Travelling Up
                chaosYTarget = 50 + chaosIntensity;
                chaosXDistance = chaosYTarget - y;                
                if (y < chaosYTarget)
                {
                    if (chaosXDistance < chaosRate)
                    {
                        knbMoveY.setValue(y + chaosXDistance);
                        chaosStage = 3;
                    }
                    else
                        knbMoveY.setValue(y + chaosRate);
                }                    
                else
                    chaosStage = 3;
            	break;
            
            case 3: //Travelling Down
                chaosYTarget = 50 - chaosIntensity;
                chaosXDistance = y - chaosYTarget;                
                if (y > chaosYTarget)
                    if (chaosXDistance < chaosRate)
                    {
                        knbMoveY.setValue(y - chaosXDistance);
                        chaosStage = 2;
                    }
                    else 
                        knbMoveY.setValue(y - chaosRate);
                else
                    chaosStage = 2;
            	break;
        }     
        knbMoveY.changed();
    }

    //Orbit 
    inline function chaosOrbit()
    {
        local x = knbMoveX.getValue();
        local y = knbMoveY.getValue();
        switch (chaosStage)
        {
            //Top Left to Top Right
            case 1:
                if (x >= chaosXTarget)
                {
                    chaosStage = 2;
                    chaosYTarget = 50 - chaosIntensity;
                }
                if (x < chaosXTarget)
                    knbMoveX.setValue(Math.round(x + chaosRate));
                knbMoveX.changed();
            	break; 
            //Top Right to Bottom Right
            case 2:
                if (y <= chaosYTarget)
                {
                    chaosStage = 3;
                    chaosXTarget = 50 - chaosIntensity;
                }
                if (y > chaosYTarget)
                    knbMoveY.setValue(Math.round(y - chaosRate));
                    
                knbMoveY.changed();
            	break; 
            //Bottom Right to Bottom Left
            case 3:
                if (x <= chaosXTarget)
                {
                    chaosStage = 4;
                    chaosYTarget = 50 + chaosIntensity;
                }
                if (x > chaosXTarget)
                    knbMoveX.setValue(Math.round(x - chaosRate));
                    
                knbMoveX.changed();
            	break; 
            //Bottom Left to Top Left
            case 4:
                if (y >= chaosYTarget)
                {
                    chaosStage = 1;
                    chaosXTarget = 50 + chaosIntensity;
                }
                if (y < chaosYTarget)
                    knbMoveY.setValue(Math.round(y + chaosRate));
                knbMoveY.changed();
            break; 
        }
    }

    //Circular
    inline function chaosCircular()
    {
        local x = knbMoveX.getValue();
        local y = knbMoveY.getValue();
        local angle = Math.toRadians(360 - chaosStage);
        local radius = chaosIntensity;
        knbMoveX.setValue(50 + radius * Math.cos(angle));
        knbMoveY.setValue(50 + radius * Math.sin(angle));
        if (chaosStage < 359)
            chaosStage += chaosRate;
        else
            chaosStage = 1;
        knbMoveX.changed();
        knbMoveY.changed();
    }

    inline function chaosTwister()
    {
        local x = knbMoveX.getValue();
        local y = knbMoveY.getValue();
        switch (chaosStage)
        {
            case 1: //Sets middle position
                knbMoveX.setValue(50);
                chaosStage = 2;
            	break;
            case 2: //Travelling Right
                chaosXTarget = 50 + chaosIntensity;
                chaosXDistance = chaosXTarget - x;
                if (x < chaosXTarget)
                {
                    if (chaosXDistance < chaosRate)
                    {
                        knbMoveX.setValue(x + chaosXDistance);
                        chaosStage = 3;
                    }
                    else
                        knbMoveX.setValue(x + chaosRate);
                }
                else
                    chaosStage = 3;
            	break;
            
            case 3: //Travelling Left
                chaosXTarget = 50 - chaosIntensity;
                chaosXDistance = x - chaosXTarget;
                if (x > chaosXTarget)
                    if (chaosXDistance < chaosRate)
                    {
                        knbMoveX.setValue(x - chaosXDistance);
                        chaosStage = 2;
                    }
                    else 
                        knbMoveX.setValue(x - chaosRate);
                else
                    chaosStage = 2;
            	break;
        }
        
        switch (chaosStageTwister)
        {
            case 1: //Sets middle position
                knbMoveY.setValue(50 + chaosIntensity);
                chaosStageTwister = 2;
            	break;
            case 2: //Travelling Up
                chaosYTarget = 50 + chaosIntensity;
                chaosXDistance = chaosYTarget - y;
                if (y < chaosYTarget)
                {
                    if (chaosXDistance < chaosRate)
                    {
                        knbMoveY.setValue(y + chaosXDistance);
                        chaosStage = 3;
                    }
                    else
                        knbMoveY.setValue(y + chaosRate / 8);
                }
                else
                    chaosStageTwister = 3;
            	break;
            
            case 3: //Travelling Down
                chaosYTarget = 50 - chaosIntensity;
                chaosXDistance = y - chaosYTarget;
                
                if (y > chaosYTarget)
                    if (chaosXDistance < chaosRate)
                    {
                        knbMoveY.setValue(y - chaosXDistance);
                        chaosStage = 2;
                    }
                    else 
                        knbMoveY.setValue(y - chaosRate / 8);
                else
                    chaosStageTwister = 2;
            	break;
        }

        knbMoveX.changed();
        knbMoveY.changed();
    }

    //Random Drift
    inline function chaosRandomDrift()
    {   
        local x = knbMoveX.getValue();
        local y = knbMoveY.getValue();
        //Reroll Targets on Counter
        if (chaosStage > 20 - chaosRate)
        {
            chaosXTarget = 50 + Math.randInt(-50, 50) * chaosIntensity / 100;
            chaosYTarget = 50 + Math.randInt(-50, 50) * chaosIntensity / 100;    
            chaosStage = 1;
        }
        //Travelling Right        
        if (x < chaosXTarget)
        {
            //Check if the remainder is less than chaosRate
            chaosXDistance = chaosXTarget - x;
            if (chaosXDistance > chaosRate)
            {
                //Iterates the slider and incremenets chaosStage
                knbMoveX.setValue(x + chaosRate * .3);
                chaosStage += 1;
            }
            else
            {
                //Calls new target and refreshes stage counter
                knbMoveX.setValue(x + chaosXDistance);
                chaosXTarget = 50 + Math.randInt(-50, 50) * chaosIntensity / 100;
                chaosStage = 1;
            }
        }
        
        //Travelling Left        
        else
        {
            //Check if the remainder is less than chaosRate
            chaosXDistance = x - chaosRate;
            if (chaosXDistance > chaosRate)
            {
                //Iterates the slider and incremenets chaosStage
                knbMoveX.setValue(x - chaosRate * .3);
                chaosStage += 1;
            }
            else
            {
                //Calls new target and refreshes stage counter
                knbMoveX.setValue(x - chaosXDistance);
                chaosXTarget = 50 + Math.randInt(-50, 50) * chaosIntensity / 100;
                chaosStage = 1;
            }
        }
        
        //Travelling Up        
        if (y < chaosYTarget)
        {
            //Check if the remainder is less than chaosRate
            chaosYDistance = chaosYTarget - y;
            if (chaosYDistance > chaosRate)
            {
                //Iterates the slider and incremenets chaosStage
                knbMoveY.setValue(y + chaosRate * .3);
                chaosStage += 1;
            }
            else
            {
                //Calls new target and refreshes stage counter
                knbMoveY.setValue(y + chaosYDistance);
                chaosYTarget = 50 + Math.randInt(-50, 50) * chaosIntensity / 100;
                chaosStage = 1;
            }
        }
        
        //Travelling Down        
        else
        {
            //Check if the remainder is less than chaosRate
            chaosYDistance = y - chaosRate;
            if (chaosYDistance > chaosRate)
            {
                //Iterates the slider and incremenets chaosStage
                knbMoveY.setValue(y - chaosRate * .3);
                chaosStage += 1;
            }
            else
            {
                //Calls new target and refreshes stage counter
                knbMoveY.setValue(y - chaosYDistance);
                chaosYTarget = 50 + Math.randInt(-50, 50) * chaosIntensity / 100;
                chaosStage = 1;
            }
        }
        knbMoveY.changed();
        knbMoveX.changed();
    }

    //Random Jump Function
    inline function chaosRandomJump()
    {
        local x = knbMoveX.getValue();
        local y = knbMoveY.getValue();
        if (chaosStage > 20 - knbMove[8].getValue())
        {
            local posX = Math.randInt(-100, 100) * chaosIntensity / 100;
            local posY = Math.randInt(-100, 100) * chaosIntensity / 100;
            knbMoveX.setValue(50 + posX);
            knbMoveY.setValue(50 + posY);
            knbMoveX.changed();
            knbMoveY.changed();
            chaosStage = 1;
        }
        else 
            chaosStage += 1;
    }

    // Assign Timer Callback
    chaosTimer.setTimerCallback(function()
    {   
        switch (chaosType)
        {
            case 1:
                chaosXDrift();
            	break;
            
            case 2:
                chaosYDrift();
            	break;
            
            case 3:
                chaosOrbit();
            	break;
            
            case 4:
                chaosCircular();
            	break;
            
            case 5:
                chaosTwister();
            	break;
            
            case 6:
                chaosRandomDrift();
            	break;
            
            case 7:
                chaosRandomJump();
            	break;
        }    
            pnlMoveXYPad.repaint();
    });

	// Bypass
	inline function onbtnChaosBypassControl(component, value)
	{
		if (value)
		{
			switch (chaosType)
			{
				case 1: // X Drift
					chaosStage = 1;
					chaosXTarget = 50 + chaosIntensity;
					break;			
				case 2: // Y Drift
					chaosStage = 1;
					chaosYTarget = 50 + chaosIntensity;
					break;			    
				case 3: // Orbit
					chaosStage = 1;
					chaosXTarget = 50 + chaosIntensity;
					knbMoveX.setValue(50 - chaosIntensity);
					knbMoveY.setValue(50 + chaosIntensity);
					break;			
				case 4: // Circular
					chaosStage = 1;
					break;
				case 5: // Twister
					chaosStage = 1;
					chaosStageTwister = 1;
					break;			
				case 6: // Random Drift
					chaosStage = 1 ;
					break;
				case 7: // Random Jump
					chaosStage = 1;
			}
			chaosTimer.startTimer(33.3333);            
		}
		else
			chaosTimer.stopTimer();
	};    

	btnMove[1].setControlCallback(onbtnChaosBypassControl);

	// Rate
	inline function onknbChaosRateControl(component, value)
	{
	    chaosRate = value;
	    if (btnMove[1].getValue())
	        chaosTimer.startTimer(33.3333);
	    if (value < 5)
	        lblMove[8].set("text", "Slow");
	    else if (value >=5 && value < 11)
	        lblMove[8].set("text", "Medium");
	    else if (value >= 11 && value < 15)
	        lblMove[8].set("text", "Fast");
	    else
	        lblMove[8].set("text", "Very Fast");
	};

	knbMove[8].setControlCallback(onknbChaosRateControl);

	//Slider Intensity
	inline function onknbChaosIntensityControl(component, value)
	{	
	    chaosIntensity = value;
	    if (btnMove[1].getValue())
	    {
	        switch (chaosType)
	        {
	            case 1: // X Drift
	                chaosStage = 1;
	                chaosXTarget = 50 + chaosIntensity;
	                break;                
	            case 2: // Y Drift
	                chaosStage = 1;
	                chaosYTarget = 50 + chaosIntensity;
	                break;                
	            case 3: // Orbit
	                chaosStage = 1;
	                chaosXTarget = 50 + chaosIntensity;
	                knbMoveX.setValue(50 - chaosIntensity);
	                knbMoveY.setValue(50 + chaosIntensity);
	                break;                            
	            case 4: // Circular
	                chaosStage = 1;
	                break;
	            case 5: // Twister
	                chaosStage = 1;
	                chaosStageTwister = 1;
	                break;
	            case 6: // Random Drift
	                chaosStage = 1;
	                break;
	            case 7: // Random Jump
	                chaosStage = 1;
	                break;
	                
	        }            
		    chaosTimer.startTimer(33.3333);    	    
	    }
	    lblMove[9].set("text", Math.round(value) * 2 + "%");
	};

    knbMove[9].setControlCallback(onknbChaosIntensityControl);

    //Buttons

    inline function onbtnChaosTypeControl(component, value)
    {
        if (value)
        {
            switch (component)
            {
                case btnMove[2]: // Chaos A
                {
                    chaosType = 1;
                    chaosXTarget = 50 + chaosIntensity;
                }
                case btnMove[3]: // Chaos B
                {
                    chaosType = 2;
                    chaosYTarget = 50 + chaosIntensity; 
                }
                case btnMove[4]: // Chaos C
                {
                    chaosType = 3;
                    chaosXTarget = 50 + chaosIntensity;
                    knbMoveX.setValue(50 - chaosIntensity);
                    knbMoveY.setValue(50 + chaosIntensity);
                }
                case btnMove[5]: // Chaos D
                {
                    chaosType = 4;
                }
                case btnMove[6]: // Chaos E
                {
                    chaosType = 5;
                    chaosStageTwister = 1;                    
                }   
                case btnMove[7]: // Chaos F
                {
                    chaosType = 6;
                }
                case btnMove[8]: // Chaos G
                {
                    chaosType = 7;
                }
            }
            chaosStage = 1;
            if (btnMove[1].getValue())
                chaosTimer.startTimer(33.3333);  
        }
    }

    // Assign Control Callback
    for (i=2; i<btnMove.length; i++)
    {
        btnMove[i].setControlCallback(onbtnChaosTypeControl);
    }    
}

