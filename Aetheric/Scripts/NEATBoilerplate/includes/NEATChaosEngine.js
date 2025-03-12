/*
    Copyright 2025 iamlamprey

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
    // GUI Elements

    /*

    const btnMove[2] = Content.getComponent("btnMove[2]");
    const btnMove[3] = Content.getComponent("btnMove[3]");
    const btnMove[4] = Content.getComponent("btnMove[4]");
    const btnMove[5] = Content.getComponent("btnMove[5]");
    const btnMove[6] = Content.getComponent("btnMove[6]");
    const btnMove[7] = Content.getComponent("btnMove[7]");
    const btnMove[8] = Content.getComponent("btnMove[8]");

    const knbMove[9] = Content.getComponent("knbMove[9]");
    const knbMove[8] = Content.getComponent("knbMove[8]");

    const Label_ChaosRateValue = Content.getComponent("Label_ChaosRateValue");
    const Label_ChaosIntensityValue = Content.getComponent("Label_ChaosIntensityValue");

    */

    const chaosTimer = Engine.createTimerObject();

    reg chaosType = 1;

    reg chaosXTarget;
    reg chaosYTarget;

    reg chaosStage = 1;
    reg chaosStageTwister = 1;

    reg chaosRate;

    reg chaosXRemainder;
    reg chaosYRemainder;

    // Functions

    //X Drift Function

    inline function chaosXDrift()
    {
        switch (chaosStage)
        {
            case 1: //Sets middle position
                knbMoveX.setValue(50);
                chaosStage = 2;
            break;
            
            case 2: //Travelling Right
                chaosXTarget = 50 + knbMove[9].getValue();
                chaosXRemainder = chaosXTarget - knbMoveX.getValue();
                
                if (knbMoveX.getValue() < chaosXTarget)
                {
                    if (chaosXRemainder < chaosRate)
                    {
                        knbMoveX.setValue(knbMoveX.getValue() + chaosXRemainder);
                        chaosStage = 3;
                    }
                    else
                        knbMoveX.setValue(knbMoveX.getValue() + chaosRate);
                }
                    
                else
                    chaosStage = 3;
            break;
            
            case 3: //Travelling Left
                chaosXTarget = 50 - knbMove[9].getValue();
                chaosXRemainder = knbMoveX.getValue() - chaosXTarget;
                
                if (knbMoveX.getValue() > chaosXTarget)
                    if (chaosXRemainder < chaosRate)
                    {
                        knbMoveX.setValue(knbMoveX.getValue() - chaosXRemainder);
                        chaosStage = 2;
                    }
                    else 
                        knbMoveX.setValue(knbMoveX.getValue() - chaosRate);

                else
                    chaosStage = 2;
            break;
        }

        knbMoveX.changed();
    }

    //Y Drift Function

    inline function chaosYDrift()
    {
        switch (chaosStage)
        {
            case 1: //Sets middle position
                knbMoveY.setValue(50);
                chaosStage = 2;
            break;
            
            case 2: //Travelling Up
                chaosYTarget = 50 + knbMove[9].getValue();
                chaosXRemainder = chaosYTarget - knbMoveY.getValue();
                
                if (knbMoveY.getValue() < chaosYTarget)
                {
                    if (chaosXRemainder < chaosRate)
                    {
                        knbMoveY.setValue(knbMoveY.getValue() + chaosXRemainder);
                        chaosStage = 3;
                    }
                    else
                        knbMoveY.setValue(knbMoveY.getValue() + chaosRate);
                }
                    
                else
                    chaosStage = 3;
            break;
            
            case 3: //Travelling Down
                chaosYTarget = 50 - knbMove[9].getValue();
                chaosXRemainder = knbMoveY.getValue() - chaosYTarget;
                
                if (knbMoveY.getValue() > chaosYTarget)
                    if (chaosXRemainder < chaosRate)
                    {
                        knbMoveY.setValue(knbMoveY.getValue() - chaosXRemainder);
                        chaosStage = 2;
                    }
                    else 
                        knbMoveY.setValue(knbMoveY.getValue() - chaosRate);

                else
                    chaosStage = 2;
            break;
        }
     
        knbMoveY.changed();
    }

    //Orbit Function

    inline function chaosOrbit()
    {
        switch (chaosStage)
        {
            //Top Left to Top Right
            case 1:
                if (knbMoveX.getValue() >= chaosXTarget)
                {
                    chaosStage = 2;
                    chaosYTarget = 50 - knbMove[9].getValue();
                }
            
                if (knbMoveX.getValue() < chaosXTarget)
                    knbMoveX.setValue(Math.round(knbMoveX.getValue() + chaosRate));
                    
                knbMoveX.changed();
            break; 
            
            //Top Right to Bottom Right
            case 2:
                if (knbMoveY.getValue() <= chaosYTarget)
                {
                    chaosStage = 3;
                    chaosXTarget = 50 - knbMove[9].getValue();
                }
            
                if (knbMoveY.getValue() > chaosYTarget)
                    knbMoveY.setValue(Math.round(knbMoveY.getValue() - chaosRate));
                    
                knbMoveY.changed();
            break; 
            
            //Bottom Right to Bottom Left
            case 3:
                if (knbMoveX.getValue() <= chaosXTarget)
                {
                    chaosStage = 4;
                    chaosYTarget = 50 + knbMove[9].getValue();
                }
            
                if (knbMoveX.getValue() > chaosXTarget)
                    knbMoveX.setValue(Math.round(knbMoveX.getValue() - chaosRate));
                    
                knbMoveX.changed();
            break; 
            
            //Bottom Left to Top Left
            case 4:
                if (knbMoveY.getValue() >= chaosYTarget)
                {
                    chaosStage = 1;
                    chaosXTarget = 50 + knbMove[9].getValue();
                }
            
                if (knbMoveY.getValue() < chaosYTarget)
                    knbMoveY.setValue(Math.round(knbMoveY.getValue() + chaosRate));
                    
                knbMoveY.changed();
            break; 
        }
    }

    //Circular Function

    inline function chaosCircular()
    {
        local angle = Math.toRadians(360 - chaosStage);
        local radius = knbMove[9].getValue();
        
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
        switch (chaosStage)
        {
            case 1: //Sets middle position
                knbMoveX.setValue(50);
                chaosStage = 2;
            break;
            
            case 2: //Travelling Right
                chaosXTarget = 50 + knbMove[9].getValue();
                chaosXRemainder = chaosXTarget - knbMoveX.getValue();
                
                if (knbMoveX.getValue() < chaosXTarget)
                {
                    if (chaosXRemainder < chaosRate)
                    {
                        knbMoveX.setValue(knbMoveX.getValue() + chaosXRemainder);
                        chaosStage = 3;
                    }
                    else
                        knbMoveX.setValue(knbMoveX.getValue() + chaosRate);
                }
                    
                else
                    chaosStage = 3;
            break;
            
            case 3: //Travelling Left
                chaosXTarget = 50 - knbMove[9].getValue();
                chaosXRemainder = knbMoveX.getValue() - chaosXTarget;
                
                if (knbMoveX.getValue() > chaosXTarget)
                    if (chaosXRemainder < chaosRate)
                    {
                        knbMoveX.setValue(knbMoveX.getValue() - chaosXRemainder);
                        chaosStage = 2;
                    }
                    else 
                        knbMoveX.setValue(knbMoveX.getValue() - chaosRate);

                else
                    chaosStage = 2;
            break;
        }
        
        switch (chaosStageTwister)
        {
            case 1: //Sets middle position
                
                knbMoveY.setValue(50 + knbMove[9].getValue());
                chaosStageTwister = 2;
            break;
            
            case 2: //Travelling Up
                chaosYTarget = 50 + knbMove[9].getValue();
                chaosXRemainder = chaosYTarget - knbMoveY.getValue();
                
                if (knbMoveY.getValue() < chaosYTarget)
                {
                    if (chaosXRemainder < chaosRate)
                    {
                        knbMoveY.setValue(knbMoveY.getValue() + chaosXRemainder);
                        chaosStage = 3;
                    }
                    else
                        knbMoveY.setValue(knbMoveY.getValue() + chaosRate / 8);
                }
                    
                else
                    chaosStageTwister = 3;
            break;
            
            case 3: //Travelling Down
                chaosYTarget = 50 - knbMove[9].getValue();
                chaosXRemainder = knbMoveY.getValue() - chaosYTarget;
                
                if (knbMoveY.getValue() > chaosYTarget)
                    if (chaosXRemainder < chaosRate)
                    {
                        knbMoveY.setValue(knbMoveY.getValue() - chaosXRemainder);
                        chaosStage = 2;
                    }
                    else 
                        knbMoveY.setValue(knbMoveY.getValue() - chaosRate / 8);

                else
                    chaosStageTwister = 2;
            break;
        }

        knbMoveX.changed();
        knbMoveY.changed();
    }

    //Random Drift Function

    inline function chaosRandomDrift()
    {   
        
        //Reroll Targets on Counter
        if (chaosStage > 20 - chaosRate)
        {
            chaosXTarget = 50 + Math.randInt(-50, 50) * knbMove[9].getValue() / 100;
            chaosYTarget = 50 + Math.randInt(-50, 50) * knbMove[9].getValue() / 100;    
            chaosStage = 1;
        }
        
        //Travelling Right
        
        if (knbMoveX.getValue() < chaosXTarget)
        {
            //Check if the remainder is less than chaosRate
            chaosXRemainder = chaosXTarget - knbMoveX.getValue();
            
            if (chaosXRemainder > chaosRate)
            {
                //Iterates the slider and incremenets chaosStage
                knbMoveX.setValue(knbMoveX.getValue() + chaosRate * .3);
                chaosStage += 1;
            }
            else
            {
                //Calls new target and refreshes stage counter
                knbMoveX.setValue(knbMoveX.getValue() + chaosXRemainder);
                chaosXTarget = 50 + Math.randInt(-50, 50) * knbMove[9].getValue() / 100;
                chaosStage = 1;
            }
        }
        
        //Travelling Left
        
        else
        {
            //Check if the remainder is less than chaosRate
            chaosXRemainder = knbMoveX.getValue() - chaosRate;
            
            if (chaosXRemainder > chaosRate)
            {
                //Iterates the slider and incremenets chaosStage
                knbMoveX.setValue(knbMoveX.getValue() - chaosRate * .3);
                chaosStage += 1;
            }
            else
            {
                //Calls new target and refreshes stage counter
                knbMoveX.setValue(knbMoveX.getValue() - chaosXRemainder);
                chaosXTarget = 50 + Math.randInt(-50, 50) * knbMove[9].getValue() / 100;
                chaosStage = 1;
            }
        }
        
        //Travelling Up
        
        if (knbMoveY.getValue() < chaosYTarget)
        {
            //Check if the remainder is less than chaosRate
            chaosYRemainder = chaosYTarget - knbMoveY.getValue();
            
            if (chaosYRemainder > chaosRate)
            {
                //Iterates the slider and incremenets chaosStage
                knbMoveY.setValue(knbMoveY.getValue() + chaosRate * .3);
                chaosStage += 1;
            }
            else
            {
                //Calls new target and refreshes stage counter
                knbMoveY.setValue(knbMoveY.getValue() + chaosYRemainder);
                chaosYTarget = 50 + Math.randInt(-50, 50) * knbMove[9].getValue() / 100;
                chaosStage = 1;
            }
        }
        
        //Travelling Down
        
        else
        {
            //Check if the remainder is less than chaosRate
            chaosYRemainder = knbMoveY.getValue() - chaosRate;
            
            if (chaosYRemainder > chaosRate)
            {
                //Iterates the slider and incremenets chaosStage
                knbMoveY.setValue(knbMoveY.getValue() - chaosRate * .3);
                chaosStage += 1;
            }
            else
            {
                //Calls new target and refreshes stage counter
                knbMoveY.setValue(knbMoveY.getValue() - chaosYRemainder);
                chaosYTarget = 50 + Math.randInt(-50, 50) * knbMove[9].getValue() / 100;
                chaosStage = 1;
            }
        }
        
        knbMoveY.changed();
        knbMoveX.changed();
    }

    //Random Jump Function

    inline function chaosRandomJump()
    {
        if (chaosStage > 20 - knbMove[8].getValue())
        {
            local posX = Math.randInt(-100, 100) * knbMove[9].getValue() / 100;
            local posY = Math.randInt(-100, 100) * knbMove[9].getValue() / 100;
        
            knbMoveX.setValue(50 + posX);
            knbMoveY.setValue(50 + posY);
        
            knbMoveX.changed();
            knbMoveY.changed();
        
            chaosStage = 1;
        }
        
        else 
            chaosStage += 1;
    }

    //X Drift

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
            MovementSettings.Panel_MovementXYPad.repaint();    
    });

    //Bypass

    //const var Button_ChaosBypass = Content.getComponent("Button_ChaosBypass");

    inline function onButton_ChaosBypassControl(component, value)
    {
        if (value)
        {
            switch (chaosType)
                {
                    //X Drift
                    case 1:
                        chaosStage = 1;
                        chaosXTarget = 50 + knbMove[9].getValue();
                    break;
                
                    //Y Drift
                    case 2:
                        chaosStage = 1;
                        chaosYTarget = 50 + knbMove[9].getValue();
                    break;
                
                    //Orbit
                    case 3:
                        chaosStage = 1;
                        chaosXTarget = 50 + knbMove[9].getValue();
                        knbMoveX.setValue(50 - knbMove[9].getValue());
                        knbMoveY.setValue(50 + knbMove[9].getValue());
                    break;
                
                    case 5:
                        chaosStage = 1;
                        chaosStageTwister = 1;
                    break;
                
                    case 6:
                        chaosStage = 1;
                
                    case 7:
                        chaosStage = 1;
                }
                chaosTimer.startTimer(33.3333);            
        }
            else
                chaosTimer.stopTimer();
    };

    //Content.getComponent("Button_ChaosBypass").setControlCallback(onButton_ChaosBypassControl);


    //Slider Rate



    inline function onknbRateControl(component, value)
    {
        chaosRate = value;
        if (Button_ChaosBypass.getValue())
            chaosTimer.startTimer(33.3333);
            
            if (value < 5)
                Label_ChaosRateValue.set("text", "Slow");
            else if (value >= 5 && value < 11)
                Label_ChaosRateValue.set("text", "Medium");
            else if (value >= 11 && value < 15)
                Label_ChaosRateValue.set("text", "Fast");
            else 
                Label_ChaosRateValue.set("text", "Very Fast");
            
    };

    //Content.getComponent("knbMove[8]").setControlCallback(onknbMove[8]Control);


    //Slider Intensity


    inline function onknbIntensity(component, value)
    {	
    	if (Button_ChaosBypass.getValue())
        {
            switch (chaosType)
            {
                //X Drift
                case 1:
                    chaosStage = 1;
                    chaosXTarget = 50 + knbMove[9].getValue();
                break;
                
                //Y Drift
                case 2:
                    chaosStage = 1;
                    chaosYTarget = 50 + knbMove[9].getValue();
                break;
                
                //Orbit
                case 3:
                    chaosStage = 1;
                    chaosXTarget = 50 + knbMove[9].getValue();
                    knbMoveX.setValue(50 - knbMove[9].getValue());
                    knbMoveY.setValue(50 + knbMove[9].getValue());
                break;
                
                //Circular
                
                case 4:
                    chaosStage = 1;
                break;
                
                //Twister
                
                case 5:
                    chaosStage = 1;
                    chaosStageTwister = 1;
                break;
                
                //Random Drift
                
                case 6:
                    chaosStage = 1;
                break;
                
                //Random Jump
                
                case 7:
                    chaosStage = 1;
                break;
                    
            }
            
    	    chaosTimer.startTimer(33.3333);
    	    
        }

    	Label_ChaosIntensityValue.set("text", Math.round(value) * 2 + "%");
    };

    //Content.getComponent("knbMove[9]").setControlCallback(onknbMove[9]Control);

    //Buttons


    inline function chaosA(component, value)
    { 
        //X Drift
        if (value)
        {
            chaosType = 1;
            chaosStage = 1;
            chaosXTarget = 50 + knbMove[9].getValue();

            if (Button_ChaosBypass.getValue())
                chaosTimer.startTimer(33.3333);   
        }
    };

    //Content.getComponent("btnMove[2]").setControlCallback(onbtnMove[2]Control);

    inline function chaosB(component, value)
    {
        //Y Drift
        if (value)
        {    
            chaosType = 2;
            chaosStage = 1;
            chaosYTarget = 50 + knbMove[9].getValue();

            if (Button_ChaosBypass.getValue())
                chaosTimer.startTimer(33.3333);   
        }
    };

    //Content.getComponent("btnMove[3]").setControlCallback(onbtnMove[3]Control);

    inline function chaosC(component, value)
    {
        //Orbit
        if (value)
        {
            chaosType = 3;
            chaosStage = 1;
            chaosXTarget = 50 + knbMove[9].getValue();
            knbMoveX.setValue(50 - knbMove[9].getValue());
            knbMoveY.setValue(50 + knbMove[9].getValue());

            if (Button_ChaosBypass.getValue())
                chaosTimer.startTimer(33.3333); 
        }  
    };

   // Content.getComponent("btnMove[4]").setControlCallback(onbtnMove[4]Control);

    inline function chaosD(component, value)
    {
        //Circular
        if (value)
        {
            chaosType = 4;
            chaosStage = 1;

            if (Button_ChaosBypass.getValue())
                chaosTimer.startTimer(33.3333);   
        }
    };

    //Content.getComponent("btnMove[5]").setControlCallback(onbtnMove[5]Control);

    inline function chaosE(component, value)
    {
        //Twister
        if (value)
        {
            chaosType = 5;
            chaosStage = 1;
            chaosStageTwister = 1;

            if (Button_ChaosBypass.getValue())
                chaosTimer.startTimer(33.3333);   
        }
    };

    //Content.getComponent("btnMove[6]").setControlCallback(onbtnMove[6]Control);

    inline function chaosF(component, value)
    {
        //Random Drift
        if (value)
        {    
            chaosType = 6;
            chaosStage = 1;

            if (Button_ChaosBypass.getValue())
                chaosTimer.startTimer(33.3333);   
        }
    };

   // Content.getComponent("btnMove[7]").setControlCallback(onbtnMove[7]Control);

    inline function chaosG(component, value)
    {
        //Random Jump
        if (value)
        {    
            chaosType = 7;
            chaosStage = 1;

            if (Button_ChaosBypass.getValue())
                chaosTimer.startTimer(33.3333);   
        }
    };

    //Content.getComponent("btnMove[8]").setControlCallback(onbtnMove[8]Control);

}