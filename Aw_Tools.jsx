{
    function myScript(thisObj) {
        function myScript_buildUI(thisObj) {
            var myWindow = (thisObj instanceof Panel) ? thisObj : new Window("palette", "A_Text", [0, 0, 250, 400], { resizeable: true, closeButton: false });

            res = "group{orientation:'column',\
                groupContainerMoveAnchor: Panel{orientation:'row', text:' Move Anchor ',\
                    groupMoveAnchor: Group{orientation:'column',\
                        groupAtasAnchor: Group{orientation:'row',\
                            anchor1s: IconButton{},\
                            anchor2s: IconButton{},\
                            anchor3s: IconButton{},\
                        },\
                        groupTengahAnchor: Group{orientation: 'row',\
                            anchor4s: IconButton{},\
                            anchor5s: IconButton{},\
                            anchor6s: IconButton{},\
                        },\
                        groupBawahAnchor: Group{orientation: 'row',\
                            anchor7s: IconButton{},\
                            anchor8s: IconButton{},\
                            anchor9s: IconButton{},\
                        },\
                    },\
                    groupAttributeAnchor: Group{orientation: 'column',\
                        ignoreMask: Checkbox{text:'Ignore Mask'},\
                        groupLockRelease: Group{orientation:'column',\
                            lockButton: IconButton{title:'Lock'},\
                            releaseButton: IconButton{title:'Release'},\
                        },\
                    },\
                },\
                panelAwText: Panel{text:' Text Animator ',\
                    groupButton: Group{orientation:'row',\
                        Text2D: IconButton{title:'Animator'},\
                        Text3D: IconButton{title:'Animator'},\
                        },\
                    groupAliDelDirContainer: Group{orientation:'row',\
                        groupAlign: Group{orientation:'row',\
                            changeAlign: IconButton{},\
                            deleteText: IconButton{},\
                            directionButton: IconButton{},\
                            copyButton: IconButton{},\
                            pasteButton: IconButton{},\
                        },\
                    },\
                },\
                otherPanel: Panel{text:' Other Tools ',\
                    groupExpressionExecutor: Group{orientation:'row',\
                        dropDownExpression: DropDownList{},\
                        executeButton: IconButton{text:'Execute'},\
                    },\
                    groupMoveFrame: Group{orientation:'row',alignChildren:'bottom',\
                        buttonMin15: IconButton{text:'-15'},\
                        buttonMin10: IconButton{text:'-10'},\
                        buttonMin5: IconButton{text:'-5'},\
                        buttonPlus5: IconButton{text:'+5'},\
                        buttonPlus10: IconButton{text:'+10'},\
                        buttonPlus15: IconButton{text:'+15'},\
                    },\
                    groupLineStroke: Group{orientation:'row',\
                        capText: StaticText{text:'Line Cap'},\
                        buttButton: IconButton{text:'1'},\
                        roundButton: IconButton{text:'2'},\
                        projectButton: IconButton{text:'3'},\
                        switchButton: IconButton{text:'Switch'},\
                    },\
                },\
            }";

            myWindow.grp = myWindow.add(res);
            myWindow.grp.preferredSize.width = 200;
            myWindow.grp.preferredSize.height = 300;
            myWindow.grp.spacing = 0;
            myWindow.grp.margins = 0;

            //<---------------------------Aw_Text Attribute------------------->
            {
                text2D = myWindow.grp.panelAwText.groupButton.Text2D;
                text3D = myWindow.grp.panelAwText.groupButton.Text3D;

                changeAlign = myWindow.grp.panelAwText.groupAliDelDirContainer.groupAlign.changeAlign;
                deleteText = myWindow.grp.panelAwText.groupAliDelDirContainer.groupAlign.deleteText;
                copyButtons = myWindow.grp.panelAwText.groupAliDelDirContainer.groupAlign.copyButton;
                pasteButtons = myWindow.grp.panelAwText.groupAliDelDirContainer.groupAlign.pasteButton;
                directionButtons = myWindow.grp.panelAwText.groupAliDelDirContainer.groupAlign.directionButton;


                text2D.size = [90, 25];
                text3D.size = [90, 25];
                changeAlign.size = [30, 25];
                deleteText.size = [30, 25];
                copyButtons.size = [30, 25];
                pasteButtons.size = [30, 25];
                directionButtons.size = [30, 25];

                text2D.helpTip = "Add 2D Text Animation In Text Layer";
                text3D.helpTip = "Add 3D Text Animation In Text Layer";
                changeAlign.helpTip = "Change Align Text Animation (Word, Character, Line)";
                deleteText.helpTip = "Delete Text Animation";
                directionButtons.helpTip = "Change Direction Text Animation (Front, Back, Random)";
                copyButtons.helpTip = "Copy Effect and Animator Text (Like CTRL + C)";
                pasteButtons.helpTip = "Paste Effect and Animator Text (Like CTRL + V)";

                text2D.image = "../ScriptUI Panels/Aw_Image/Text/2D.png";
                text3D.image = "../ScriptUI Panels/Aw_Image/Text/3D.png";
                changeAlign.image = "../ScriptUI Panels/Aw_Image/Text/align.png";
                deleteText.image = "../ScriptUI Panels/Aw_Image/Text/delete.png";
                directionButtons.image = "../ScriptUI Panels/Aw_Image/Text/direction.png";
                copyButtons.image = "../ScriptUI Panels/Aw_Image/Text/copy.png";
                pasteButtons.image = "../ScriptUI Panels/Aw_Image/Text/paste.png";
            }

            //<-----------------MoveAnchor Attribute------------------>
            {
                anchor1 = myWindow.grp.groupContainerMoveAnchor.groupMoveAnchor.groupAtasAnchor.anchor1s;
                anchor2 = myWindow.grp.groupContainerMoveAnchor.groupMoveAnchor.groupAtasAnchor.anchor2s;
                anchor3 = myWindow.grp.groupContainerMoveAnchor.groupMoveAnchor.groupAtasAnchor.anchor3s;

                anchor4 = myWindow.grp.groupContainerMoveAnchor.groupMoveAnchor.groupTengahAnchor.anchor4s;
                anchor5 = myWindow.grp.groupContainerMoveAnchor.groupMoveAnchor.groupTengahAnchor.anchor5s;
                anchor6 = myWindow.grp.groupContainerMoveAnchor.groupMoveAnchor.groupTengahAnchor.anchor6s;

                anchor7 = myWindow.grp.groupContainerMoveAnchor.groupMoveAnchor.groupBawahAnchor.anchor7s;
                anchor8 = myWindow.grp.groupContainerMoveAnchor.groupMoveAnchor.groupBawahAnchor.anchor8s;
                anchor9 = myWindow.grp.groupContainerMoveAnchor.groupMoveAnchor.groupBawahAnchor.anchor9s;

                ignoreMasks = myWindow.grp.groupContainerMoveAnchor.groupAttributeAnchor.ignoreMask;
                ignoreMasks.value == false;
                releaseButtons = myWindow.grp.groupContainerMoveAnchor.groupAttributeAnchor.groupLockRelease.releaseButton;
                lockButtons = myWindow.grp.groupContainerMoveAnchor.groupAttributeAnchor.groupLockRelease.lockButton;

                lockButtons.image = "../ScriptUI Panels/Aw_Image/Anchor/locks.png";
                releaseButtons.image = "../ScriptUI Panels/Aw_Image/Anchor/release.png"
                // anchor1.image = "../ScriptUI Panels/Aw_Image/Anchor/circle.png"
                // anchor2.image = "../ScriptUI Panels/Aw_Image/Anchor/circle.png"
                // anchor3.image = "../ScriptUI Panels/Aw_Image/Anchor/circle.png"
                // anchor4.image = "../ScriptUI Panels/Aw_Image/Anchor/circle.png"
                // anchor5.image = "../ScriptUI Panels/Aw_Image/Anchor/anchor.png"
                // anchor6.image = "../ScriptUI Panels/Aw_Image/Anchor/circle.png"
                // anchor7.image = "../ScriptUI Panels/Aw_Image/Anchor/circle.png"
                // anchor8.image = "../ScriptUI Panels/Aw_Image/Anchor/circle.png"
                // anchor9.image = "../ScriptUI Panels/Aw_Image/Anchor/circle.png"


                lockButtons.helpTip = "Lock Anchor Point Value using Simple Expression";
                releaseButtons.helpTip = "Release / Delete Locked Anchor Point Expression";
                ignoreMasks.helpTip = "Move Anchor Without Mask (Shape Layer)"

                releaseButtons.size = [75, 25];
                lockButtons.size = [75, 25];

                anchor1.size = [25, 25];
                anchor2.size = [25, 25];
                anchor3.size = [25, 25];

                anchor4.size = [25, 25];
                anchor5.size = [25, 25];
                anchor6.size = [25, 25];

                anchor7.size = [25, 25];
                anchor8.size = [25, 25];
                anchor9.size = [25, 25];
            }

            //<----------------DropDown Attribute--------------------------->
            // myWindow.grp.otherPanel.alignment = "left"

            {
                dropDownExpressions = myWindow.grp.otherPanel.groupExpressionExecutor.dropDownExpression;
                executeButtons = myWindow.grp.otherPanel.groupExpressionExecutor.executeButton;
                executeButtons.size = [40, 25];
                dropDownExpressions.size = [145, 25];

                executeButtons.image = "../ScriptUI Panels/Aw_Image/Other/launch.png";
                executeButtons.helpTip = "Give Expression Selected in DropdownList to Selected Property";
                dropDownExpressions.helpTip = "List of Expression you put in Aw_Tools Folder";
            }

            //<----------------Move Time Frame Attribute----------------------->
            {
                min5 = myWindow.grp.otherPanel.groupMoveFrame.buttonMin5;
                min10 = myWindow.grp.otherPanel.groupMoveFrame.buttonMin10;
                min15 = myWindow.grp.otherPanel.groupMoveFrame.buttonMin15;
                plus5 = myWindow.grp.otherPanel.groupMoveFrame.buttonPlus5;
                plus10 = myWindow.grp.otherPanel.groupMoveFrame.buttonPlus10;
                plus15 = myWindow.grp.otherPanel.groupMoveFrame.buttonPlus15;

                min5.size = [25, 25];
                min10.size = [25, 25];
                min15.size = [25, 25];
                plus5.size = [25, 25];
                plus10.size = [25, 25];
                plus15.size = [25, 25];

                min5.helpTip = "Change Current Time Indicator to -5";
                min10.helpTip = "Change Current Time Indicator to -10";
                min15.helpTip = "Change Current Time Indicator to -15";
                plus5.helpTip = "Change Current Time Indicator to +5";
                plus10.helpTip = "Change Current Time Indicator to +10";
                plus15.helpTip = "Change Current Time Indicator to +15";

                min5.style = "toolbutton";

                min5.image = "../ScriptUI Panels/Aw_Image/Other/-5.png";
                min10.image = "../ScriptUI Panels/Aw_Image/Other/-10.png";
                min15.image = "../ScriptUI Panels/Aw_Image/Other/-15.png";
                plus15.image = "../ScriptUI Panels/Aw_Image/Other/+15.png";
                plus10.image = "../ScriptUI Panels/Aw_Image/Other/+10.png";
                plus5.image = "../ScriptUI Panels/Aw_Image/Other/+5.png";
            }

            //<-----------------------Line Cap Attribute------------------------------>
            {
                capTexts = myWindow.grp.otherPanel.groupLineStroke.capText;
                buttButtons = myWindow.grp.otherPanel.groupLineStroke.buttButton;
                roundButtons = myWindow.grp.otherPanel.groupLineStroke.roundButton;
                projectButtons = myWindow.grp.otherPanel.groupLineStroke.projectButton;
                switchButtons = myWindow.grp.otherPanel.groupLineStroke.switchButton;
                capTexts = myWindow.grp.otherPanel.groupLineStroke.capText;

                buttButtons.size = [25, 25];
                roundButtons.size = [25, 25];
                projectButtons.size = [25, 25];
                switchButtons.size = [35, 25];

                switchButtons.image = "../ScriptUI Panels/Aw_Image/Other/switch.png";
                buttButtons.image = "../ScriptUI Panels/Aw_Image/Other/1.png";
                roundButtons.image = "../ScriptUI Panels/Aw_Image/Other/2.png";
                projectButtons.image = "../ScriptUI Panels/Aw_Image/Other/3.png";

                buttButtons.helpTip = "Number 1 of Property in LineCap or LineJoin";
                roundButtons.helpTip = "Number 2 of Property in LineCap or LineJoin";
                projectButtons.helpTip = "Number 3 of Property in LineCap or LineJoin";
                switchButtons.helpTip = "Switch Line Cap to Line Join Option in Script";
                capTexts.helpTip = "Indicator from Switch Button";
            }

            //<---------------------Aw_Text-------------------------------->
            text2D.onClick = function () {
                if (app.project.activeItem == null) {
                    return false;
                }
                if (app.project.activeItem.selectedLayers == null) {
                    return false; //have selected layer or not?
                }
                if (app.project.activeItem.selectedLayers.length < 1) {
                    return false; //have selected layer or not?
                }
                app.beginUndoGroup("Undo");
                indexLayer = app.project.activeItem.selectedLayers;
                var totalLayer = []; //array for collecting selectedLayer (idk why im do this)

                for (i = 0; i < indexLayer.length; i++) {
                    totalLayer.push(indexLayer[i].index);
                } //Add all selected layer to Array (totalLayer)

                for (i = 0; i < totalLayer.length; i++) {
                    textCheck = app.project.activeItem.layer(totalLayer[i]); //selected layer but with index 
                    if (textCheck.property("ADBE Text Properties") == null) continue; //if layer isn't Text, continue

                    if (textCheck.effect("A_Text3D") != null) {
                        alert("You cannot add 2D Animation in 3D Animation");
                        return false;
                    } //Check 3D Animator exist or not

                    //applyA_Text();
                    //textCheck.applyPreset(File("../Support Files/Scripts/ScriptUI Panels/Aw_Tools/A_Text.ffx")); //apply effect
                    textCheck.effect.addProperty("Pseudo/A_Text");

                    textAnimator = textCheck.Text.Animators.addProperty("ADBE Text Animator");
                    //tamabhkan nama animator sekarang ke indexAnimator
                    textAnimator.name = "Aw_Text"; //rename Animator 1 to Aw_Text
                    textAnimator.property("ADBE Text Selectors").addProperty("ADBE Text Selector");

                    // <----------------Transform Property--------------->
                    if (textCheck.text.Animators.numProperties == 1) { // add property with true Index
                        var expressionSelector = textAnimator.property("ADBE Text Selectors").addProperty("ADBE Text Expressible Selector");
                        expressionSelector.amount.expression =
                            'delay = thisLayer.effect("A_Text")("Delay");\
                            fullDelay = delay * (textIndex - 1) * thisComp.frameDuration;\
                            thisLayer.effect("A_Text")("Animation").valueAtTime(time - fullDelay); ';

                        textAnimator.property("ADBE Text Animator Properties").addProperty("ADBE Text Anchor Point 3D");
                        textAnimator.property("ADBE Text Animator Properties").property("ADBE Text Anchor Point 3D").expression = 'thisLayer.effect("A_Text")("Anchor Point");';

                        textAnimator.property("ADBE Text Animator Properties").addProperty("ADBE Text Position 3D");
                        textAnimator.property("ADBE Text Animator Properties").property("ADBE Text Position 3D").expression = 'thisLayer.effect("A_Text")("Position")';

                        textAnimator.property("ADBE Text Animator Properties").addProperty("ADBE Text Scale 3D");
                        textAnimator.property("ADBE Text Animator Properties").property("ADBE Text Scale 3D").expression = 'temp = effect("A_Text")("Linked Scale");(temp == 1) ? [thisLayer.effect("A_Text")("Scale"), thisLayer.effect("A_Text")("Scale")] : [effect("A_Text")("Scale X"), effect("A_Text")("Scale Y")]'

                        textAnimator.property("ADBE Text Animator Properties").addProperty("ADBE Text Skew");
                        textAnimator.property("ADBE Text Animator Properties").property("ADBE Text Skew").expression = 'thisLayer.effect("A_Text")("Skew")'

                        textAnimator.property("ADBE Text Animator Properties").addProperty("ADBE Text Skew Axis");
                        textAnimator.property("ADBE Text Animator Properties").property("ADBE Text Skew Axis").expression = 'thisLayer.effect("A_Text")("Skew Angle")'

                        textAnimator.property("ADBE Text Animator Properties").addProperty("ADBE Text Rotation");
                        textAnimator.property("ADBE Text Animator Properties").property("ADBE Text Rotation").expression = 'thisLayer.effect("A_Text")("Rotation")'

                        textAnimator.property("ADBE Text Animator Properties").addProperty("ADBE Text Opacity");
                        textAnimator.property("ADBE Text Animator Properties").property("ADBE Text Opacity").expression = 'thisLayer.effect("A_Text")("Opacity")'

                        // Style Property
                        textAnimator.property("ADBE Text Animator Properties").addProperty("ADBE Text Tracking Amount");
                        textAnimator.property("ADBE Text Animator Properties").property("ADBE Text Tracking Amount").expression = 'thisLayer.effect("A_Text")("Tracking")'

                        textAnimator.property("ADBE Text Animator Properties").addProperty("ADBE Text Track Type");
                        textAnimator.property("ADBE Text Animator Properties").property("ADBE Text Track Type").expression = 'thisLayer.effect("A_Text")("Tracking Type")'

                        textAnimator.property("ADBE Text Animator Properties").addProperty("ADBE Text Line Anchor");
                        textAnimator.property("ADBE Text Animator Properties").property("ADBE Text Line Anchor").expression = 'thisLayer.effect("A_Text")("Line Anchor")'

                        textAnimator.property("ADBE Text Animator Properties").addProperty("ADBE Text Line Spacing");
                        textAnimator.property("ADBE Text Animator Properties").property("ADBE Text Line Spacing").expression = 'thisLayer.effect("A_Text")("Line Spacing")'

                        textAnimator.property("ADBE Text Animator Properties").addProperty("ADBE Text Character Replace");
                        textAnimator.property("ADBE Text Animator Properties").property("ADBE Text Character Replace").expression = 'thisLayer.effect("A_Text")("Character Value")'

                        textAnimator.property("ADBE Text Animator Properties").addProperty("ADBE Text Character Offset");
                        textAnimator.property("ADBE Text Animator Properties").property("ADBE Text Character Offset").expression = 'thisLayer.effect("A_Text")("Character Offset")'

                        textAnimator.property("ADBE Text Animator Properties").addProperty("ADBE Text Blur");
                        textAnimator.property("ADBE Text Animator Properties").property("ADBE Text Blur").expression = 'thisLayer.effect("A_Text")("Blur")'

                    } else {
                        var expressionSelector = textAnimator.property("ADBE Text Selectors").addProperty("ADBE Text Expressible Selector");
                        for (num = 2; num <= textCheck.text.Animators.numProperties; num++) {
                            expressionSelector.amount.expression =
                                'delay = thisLayer.effect("A_Text ' + num + '")("Delay");\
                                fullDelay = delay * (textIndex - 1) * thisComp.frameDuration;\
                                thisLayer.effect("A_Text ' + num + '")("Animation").valueAtTime(time - fullDelay); ';
                            textAnimator.property("ADBE Text Animator Properties").addProperty("ADBE Text Anchor Point 3D");
                            textAnimator.property("ADBE Text Animator Properties").property("ADBE Text Anchor Point 3D").expression = 'thisLayer.effect("A_Text ' + num + '")("Anchor Point");';

                            textAnimator.property("ADBE Text Animator Properties").addProperty("ADBE Text Position 3D");
                            textAnimator.property("ADBE Text Animator Properties").property("ADBE Text Position 3D").expression = 'thisLayer.effect("A_Text ' + num + '")("Position")';

                            textAnimator.property("ADBE Text Animator Properties").addProperty("ADBE Text Scale 3D");
                            textAnimator.property("ADBE Text Animator Properties").property("ADBE Text Scale 3D").expression = 'temp = effect("A_Text ' + num + '")("Linked Scale");(temp == 1) ? [thisLayer.effect("A_Text ' + num + '")("Scale"), thisLayer.effect("A_Text ' + num + '")("Scale")] : [effect("A_Text ' + num + '")("Scale X"), effect("A_Text ' + num + '")("Scale Y")]'

                            textAnimator.property("ADBE Text Animator Properties").addProperty("ADBE Text Skew");
                            textAnimator.property("ADBE Text Animator Properties").property("ADBE Text Skew").expression = 'thisLayer.effect("A_Text ' + num + '")("Skew")'

                            textAnimator.property("ADBE Text Animator Properties").addProperty("ADBE Text Skew Axis");
                            textAnimator.property("ADBE Text Animator Properties").property("ADBE Text Skew Axis").expression = 'thisLayer.effect("A_Text ' + num + '")("Skew Angle")'

                            textAnimator.property("ADBE Text Animator Properties").addProperty("ADBE Text Rotation");
                            textAnimator.property("ADBE Text Animator Properties").property("ADBE Text Rotation").expression = 'thisLayer.effect("A_Text ' + num + '")("Rotation")'

                            textAnimator.property("ADBE Text Animator Properties").addProperty("ADBE Text Opacity");
                            textAnimator.property("ADBE Text Animator Properties").property("ADBE Text Opacity").expression = 'thisLayer.effect("A_Text ' + num + '")("Opacity")'

                            // Style Property
                            textAnimator.property("ADBE Text Animator Properties").addProperty("ADBE Text Tracking Amount");
                            textAnimator.property("ADBE Text Animator Properties").property("ADBE Text Tracking Amount").expression = 'thisLayer.effect("A_Text ' + num + '")("Tracking")'

                            textAnimator.property("ADBE Text Animator Properties").addProperty("ADBE Text Track Type");
                            textAnimator.property("ADBE Text Animator Properties").property("ADBE Text Track Type").expression = 'thisLayer.effect("A_Text ' + num + '")("Tracking Type")'

                            textAnimator.property("ADBE Text Animator Properties").addProperty("ADBE Text Line Anchor");
                            textAnimator.property("ADBE Text Animator Properties").property("ADBE Text Line Anchor").expression = 'thisLayer.effect("A_Text ' + num + '")("Line Anchor")'

                            textAnimator.property("ADBE Text Animator Properties").addProperty("ADBE Text Line Spacing");
                            textAnimator.property("ADBE Text Animator Properties").property("ADBE Text Line Spacing").expression = 'thisLayer.effect("A_Text ' + num + '")("Line Spacing")'

                            textAnimator.property("ADBE Text Animator Properties").addProperty("ADBE Text Character Replace");
                            textAnimator.property("ADBE Text Animator Properties").property("ADBE Text Character Replace").expression = 'thisLayer.effect("A_Text ' + num + '")("Character Value")'

                            textAnimator.property("ADBE Text Animator Properties").addProperty("ADBE Text Character Offset");
                            textAnimator.property("ADBE Text Animator Properties").property("ADBE Text Character Offset").expression = 'thisLayer.effect("A_Text ' + num + '")("Character Offset")'

                            textAnimator.property("ADBE Text Animator Properties").addProperty("ADBE Text Blur");
                            textAnimator.property("ADBE Text Animator Properties").property("ADBE Text Blur").expression = 'thisLayer.effect("A_Text ' + num + '")("Blur")'
                        }
                    }
                };
            };
            text3D.onClick = function () {
                if (app.project.activeItem == null) {
                    return false;
                }
                if (app.project.activeItem.selectedLayers == null) {
                    return false; //have selected layer or not?
                }
                if (app.project.activeItem.selectedLayers.length < 1) {
                    return false; //have selected layer or not?
                }

                app.beginUndoGroup("Undo");
                indexLayer = app.project.activeItem.selectedLayers;
                var totalLayer = [], i;

                for (i = 0; i < indexLayer.length; i++) {
                    totalLayer.push(indexLayer[i].index);
                } //Add all selected layer to Array (totalLayer)
                for (i = 0; i < totalLayer.length; i++) {
                    textCheck = app.project.activeItem.layer(totalLayer[i]);
                    if (textCheck.property("ADBE Text Properties") == null) continue;

                    if (textCheck.effect("A_Text") != null) {
                        alert("You cannot add 3D Animation in 2D Animation");
                        return false;
                    } //Check 2D Animator exist or not

                    //applyA_Text();
                    textCheck.threeDPerChar = true;
                    textCheck.effect.addProperty("Pseudo/A_Text3D");
                    //textCheck.applyPreset(File("../Support Files/Scripts/ScriptUI Panels/Aw_Tools/A_Text3D.ffx"));

                    textAnimator = textCheck.Text.Animators.addProperty("ADBE Text Animator");
                    //tamabhkan nama animator sekarang ke indexAnimator
                    textAnimator.name = "Aw_Text";
                    textAnimator.property("ADBE Text Selectors").addProperty("ADBE Text Selector");

                    // <-----------------Transform Property----------------->
                    if (textCheck.text.Animators.numProperties == 1) { // add property with true Index
                        var expressionSelector = textAnimator.property("ADBE Text Selectors").addProperty("ADBE Text Expressible Selector");
                        expressionSelector.amount.expression =
                            'delay = thisLayer.effect("A_Text3D")("Delay");\
                            fullDelay = delay * (textIndex - 1) * thisComp.frameDuration;\
                            thisLayer.effect("A_Text3D")("Animation").valueAtTime(time - fullDelay); ';

                        textAnimator.property("ADBE Text Animator Properties").addProperty("ADBE Text Anchor Point 3D");
                        textAnimator.property("ADBE Text Animator Properties").property("ADBE Text Anchor Point 3D").expression = 'thisLayer.effect("A_Text3D")("Anchor Point");';

                        textAnimator.property("ADBE Text Animator Properties").addProperty("ADBE Text Position 3D");
                        textAnimator.property("ADBE Text Animator Properties").property("ADBE Text Position 3D").expression = 'thisLayer.effect("A_Text3D")("Position")';

                        textAnimator.property("ADBE Text Animator Properties").addProperty("ADBE Text Scale 3D");
                        textAnimator.property("ADBE Text Animator Properties").property("ADBE Text Scale 3D").expression = 'temp = effect("A_Text3D")("Linked Scale");(temp == 1) ? [thisLayer.effect("A_Text3D")("Scale"), thisLayer.effect("A_Text3D")("Scale")] : [effect("A_Text3D")("Scale X"), effect("A_Text3D")("Scale Y"), effect("A_Text3D")("Scale Z")]'

                        textAnimator.property("ADBE Text Animator Properties").addProperty("ADBE Text Skew");
                        textAnimator.property("ADBE Text Animator Properties").property("ADBE Text Skew").expression = 'thisLayer.effect("A_Text3D")("Skew")'

                        textAnimator.property("ADBE Text Animator Properties").addProperty("ADBE Text Skew Axis");
                        textAnimator.property("ADBE Text Animator Properties").property("ADBE Text Skew Axis").expression = 'thisLayer.effect("A_Text3D")("Skew Angle")'

                        textAnimator.property("ADBE Text Animator Properties").addProperty("ADBE Text Rotation");
                        textAnimator.property("ADBE Text Animator Properties").property("ADBE Text Rotation").expression = 'thisLayer.effect("A_Text3D")("Rotation")'

                        textAnimator.property("ADBE Text Animator Properties").addProperty("ADBE Text Opacity");
                        textAnimator.property("ADBE Text Animator Properties").property("ADBE Text Opacity").expression = 'thisLayer.effect("A_Text3D")("Opacity")'

                        // Style Property
                        textAnimator.property("ADBE Text Animator Properties").addProperty("ADBE Text Tracking Amount");
                        textAnimator.property("ADBE Text Animator Properties").property("ADBE Text Tracking Amount").expression = 'thisLayer.effect("A_Text3D")("Tracking")'

                        textAnimator.property("ADBE Text Animator Properties").addProperty("ADBE Text Track Type");
                        textAnimator.property("ADBE Text Animator Properties").property("ADBE Text Track Type").expression = 'thisLayer.effect("A_Text3D")("Tracking Type")'

                        textAnimator.property("ADBE Text Animator Properties").addProperty("ADBE Text Line Anchor");
                        textAnimator.property("ADBE Text Animator Properties").property("ADBE Text Line Anchor").expression = 'thisLayer.effect("A_Text3D")("Line Anchor")'

                        textAnimator.property("ADBE Text Animator Properties").addProperty("ADBE Text Line Spacing");
                        textAnimator.property("ADBE Text Animator Properties").property("ADBE Text Line Spacing").expression = 'thisLayer.effect("A_Text3D")("Line Spacing")'

                        textAnimator.property("ADBE Text Animator Properties").addProperty("ADBE Text Character Replace");
                        textAnimator.property("ADBE Text Animator Properties").property("ADBE Text Character Replace").expression = 'thisLayer.effect("A_Text3D")("Character Value")'

                        textAnimator.property("ADBE Text Animator Properties").addProperty("ADBE Text Character Offset");
                        textAnimator.property("ADBE Text Animator Properties").property("ADBE Text Character Offset").expression = 'thisLayer.effect("A_Text3D")("Character Offset")'

                        textAnimator.property("ADBE Text Animator Properties").addProperty("ADBE Text Blur");
                        textAnimator.property("ADBE Text Animator Properties").property("ADBE Text Blur").expression = 'thisLayer.effect("A_Text3D")("Blur")'

                    } else {
                        var expressionSelector = textAnimator.property("ADBE Text Selectors").addProperty("ADBE Text Expressible Selector");
                        for (num = 2; num <= textCheck.text.Animators.numProperties; num++) {
                            expressionSelector.amount.expression =
                                'delay = thisLayer.effect("A_Text3D ' + num + '")("Delay");\
                                fullDelay = delay * (textIndex - 1) * thisComp.frameDuration;\
                                thisLayer.effect("A_Text3D ' + num + '")("Animation").valueAtTime(time - fullDelay); ';
                            textAnimator.property("ADBE Text Animator Properties").addProperty("ADBE Text Anchor Point 3D");
                            textAnimator.property("ADBE Text Animator Properties").property("ADBE Text Anchor Point 3D").expression = 'thisLayer.effect("A_Text3D ' + num + '")("Anchor Point");';

                            textAnimator.property("ADBE Text Animator Properties").addProperty("ADBE Text Position 3D");
                            textAnimator.property("ADBE Text Animator Properties").property("ADBE Text Position 3D").expression = 'thisLayer.effect("A_Text3D ' + num + '")("Position")';

                            textAnimator.property("ADBE Text Animator Properties").addProperty("ADBE Text Scale 3D");
                            textAnimator.property("ADBE Text Animator Properties").property("ADBE Text Scale 3D").expression = 'temp = effect("A_Text3D ' + num + '")("Linked Scale");(temp == 1) ? [thisLayer.effect("A_Text3D ' + num + '")("Scale"), thisLayer.effect("A_Text3D ' + num + '")("Scale")] : [effect("A_Text3D ' + num + '")("Scale X"), effect("A_Text3D ' + num + '")("Scale Y"), effect("A_Text3D ' + num + '")("Scale Z")]'

                            textAnimator.property("ADBE Text Animator Properties").addProperty("ADBE Text Skew");
                            textAnimator.property("ADBE Text Animator Properties").property("ADBE Text Skew").expression = 'thisLayer.effect("A_Text3D ' + num + '")("Skew")'

                            textAnimator.property("ADBE Text Animator Properties").addProperty("ADBE Text Skew Axis");
                            textAnimator.property("ADBE Text Animator Properties").property("ADBE Text Skew Axis").expression = 'thisLayer.effect("A_Text3D ' + num + '")("Skew Angle")'

                            textAnimator.property("ADBE Text Animator Properties").addProperty("ADBE Text Rotation");
                            textAnimator.property("ADBE Text Animator Properties").property("ADBE Text Rotation").expression = 'thisLayer.effect("A_Text3D ' + num + '")("Rotation")'

                            textAnimator.property("ADBE Text Animator Properties").addProperty("ADBE Text Opacity");
                            textAnimator.property("ADBE Text Animator Properties").property("ADBE Text Opacity").expression = 'thisLayer.effect("A_Text3D ' + num + '")("Opacity")'

                            // Style Property
                            textAnimator.property("ADBE Text Animator Properties").addProperty("ADBE Text Tracking Amount");
                            textAnimator.property("ADBE Text Animator Properties").property("ADBE Text Tracking Amount").expression = 'thisLayer.effect("A_Text3D ' + num + '")("Tracking")'

                            textAnimator.property("ADBE Text Animator Properties").addProperty("ADBE Text Track Type");
                            textAnimator.property("ADBE Text Animator Properties").property("ADBE Text Track Type").expression = 'thisLayer.effect("A_Text3D ' + num + '")("Tracking Type")'

                            textAnimator.property("ADBE Text Animator Properties").addProperty("ADBE Text Line Anchor");
                            textAnimator.property("ADBE Text Animator Properties").property("ADBE Text Line Anchor").expression = 'thisLayer.effect("A_Text3D ' + num + '")("Line Anchor")'

                            textAnimator.property("ADBE Text Animator Properties").addProperty("ADBE Text Line Spacing");
                            textAnimator.property("ADBE Text Animator Properties").property("ADBE Text Line Spacing").expression = 'thisLayer.effect("A_Text3D ' + num + '")("Line Spacing")'

                            textAnimator.property("ADBE Text Animator Properties").addProperty("ADBE Text Character Replace");
                            textAnimator.property("ADBE Text Animator Properties").property("ADBE Text Character Replace").expression = 'thisLayer.effect("A_Text3D ' + num + '")("Character Value")'

                            textAnimator.property("ADBE Text Animator Properties").addProperty("ADBE Text Character Offset");
                            textAnimator.property("ADBE Text Animator Properties").property("ADBE Text Character Offset").expression = 'thisLayer.effect("A_Text3D ' + num + '")("Character Offset")'

                            textAnimator.property("ADBE Text Animator Properties").addProperty("ADBE Text Blur");
                            textAnimator.property("ADBE Text Animator Properties").property("ADBE Text Blur").expression = 'thisLayer.effect("A_Text3D ' + num + '")("Blur")'
                        }
                    }
                };
            };
            deleteText.onClick = function () {
                if (app.project.activeItem == null) {
                    return false;
                }
                app.beginUndoGroup("Delete");
                textCheck = app.project.activeItem.selectedLayers[0];
                thisDelete = app.project.activeItem.selectedLayers;
                if (thisDelete < 1 || textCheck.property("ADBE Text Properties") == null || textCheck("ADBE Text Properties")("ADBE Text Animators")("ADBE Text Animator") == null) {
                    return false; //layer not selected?; layer is text?; layer text but have animator?;
                }

                var totalLayerD = []; //Declare if this is Array
                for (i = 0; i < thisDelete.length; i++) {
                    totalLayerD.push(thisDelete[i].index);
                } // //Add all selected layer to Array (thisDelete)

                for (i = 0; i < totalLayerD.length; i++) { //pengulangan utama
                    checkDelete = app.project.activeItem.layer(totalLayerD[i]);
                    var allLayerDelete = app.project.activeItem.selectedLayers[i];
                    var textLength = allLayerDelete.text.animator.numProperties; //Declare every property

                    if (thisDelete[i].effect("A_Text") != null && thisDelete[i].effect("A_Text3D") != null) {
                        return; //layer have 2d and have 3d, return null;
                    }

                    //----------------------------------------------2D ANIMATION--------------------------------------------------------
                    else if (thisDelete[i].effect("A_Text") != null) { // if A_Text in text
                        if (thisDelete[i].text.animator.numProperties > 1) { // if animator more than 1

                            arrayNum = new Array();
                            numInt = parseInt(thisDelete[i].text.animator.numProperties); //convert thisDelete... to Int
                            app.project.activeItem.selectedLayers[i].Effects("A_Text").remove(); // Delete Single Effect (A_Text)
                            for (k = 0; k < numInt; k++) {
                                arrayNum.push(k); //add full number property (A_Text) to array
                            } //push index
                            for (i = 2; i <= arrayNum.length; i++) {
                                allLayerDelete.Effects("A_Text" + " " + i).remove();
                            } //Delete Multiple Effect (A_Text 2, A_Text 3, etc)
                            for (i = textLength; i >= 1; i--) {
                                allLayerDelete.text.animator(i).remove();
                            } //Delete every animator(using numProperty)

                        } else {
                            allLayerDelete.Effects("A_Text").remove();
                            var textLength = allLayerDelete.text.animator.numProperties;
                            for (i = textLength; i >= 1; i--) {
                                allLayerDelete.text.animator(i).remove();
                            } //Delete every animator(using numProperty
                        }
                    } // end ifelse A_Text

                    //----------------------------------------------3D ANIMATION--------------------------------------------------------
                    else if (thisDelete[i].effect("A_Text3D") != null) { // if A_Text3D in text
                        if (thisDelete[i].text.animator.numProperties > 1) { // if animator more than 1
                            var textLength = allLayerDelete.text.animator.numProperties; //Declare every property

                            arrayNum = new Array();
                            numInt = parseInt(thisDelete[i].text.animator.numProperties); //convert thisDelete... to Int
                            allLayerDelete.Effects("A_Text3D").remove(); // Delete Single Effect (A_Text)
                            for (k = 0; k < numInt; k++) {
                                arrayNum.push(k); //add full number property (A_Text) to array
                            }
                            for (i = 2; i <= arrayNum.length; i++) {
                                allLayerDelete.Effects("A_Text3D" + " " + i).remove();
                            } //Delete Multiple Effect (A_Text 2, A_Text 3, etc)
                            for (i = textLength; i >= 1; i--) {
                                allLayerDelete.text.animator(i).remove();
                            } //Delete every animator(using numProperty)
                            allLayerDelete.threeDPerChar = false;
                            allLayerDelete.threeDLayer = false;

                        } else {
                            allLayerDelete.Effects("A_Text3D").remove(); // Delete Single Effect (A_Text)
                            var textLength = allLayerDelete.text.animator.numProperties;
                            for (i = textLength; i >= 1; i--) {
                                allLayerDelete.text.animator(i).remove();
                            } //Delete every animator(using numProperty)
                            allLayerDelete.threeDPerChar = false;
                            allLayerDelete.threeDLayer = false;

                        }
                    } // end ifelse A_Text3D
                }
            }
            changeAlign.onClick = function () { //basedOn
                if (app.project.activeItem == null) {
                    return false;
                }
                app.beginUndoGroup("change");
                textCheck = app.project.activeItem.selectedLayers[0];
                if (app.project.activeItem.selectedLayers.length < 1 || textCheck.property("ADBE Text Properties") == null || textCheck("ADBE Text Properties")("ADBE Text Animators")("ADBE Text Animator") == null) {
                    return false;
                }

                alignLayer = app.project.activeItem.selectedLayers;
                var totalAlign = [];
                for (i = 0; i < alignLayer.length; i++) {
                    totalAlign.push(alignLayer[i].index); //Add all selected layer to Array (totalAlign)
                }
                for (i = 0; i < alignLayer.length; i++) {
                    // <------------Declare Window and Button-------------->
                    dialogWindow = new Window('dialog', "Align Text", undefined);
                    groupButton = dialogWindow.add("Group", undefined, "");
                    groupButton.orientation = "column";
                    characterButton = groupButton.add("button", undefined, "Character");
                    characterButton.size = [175, 35];
                    charexcludeButton = groupButton.add("button", undefined, "Character Exclude Space");
                    charexcludeButton.size = [175, 35];
                    wordButton = groupButton.add("button", undefined, "Words");
                    wordButton.size = [175, 35];
                    lineButton = groupButton.add("button", undefined, "Lines");
                    lineButton.size = [175, 35];
                    // <-------------------------------------------------->

                    characterButton.onClick = function () {
                        for (h = 0; h < totalAlign.length; h++) {
                            for (j = 1; j <= app.project.activeItem.selectedLayers[h].text.animator.numProperties; j++) {
                                thisLayers = app.project.activeItem.selectedLayers[h];
                                //("ADBE Text Properties")("ADBE Text Animators")(1)
                                thisLayers("ADBE Text Properties")("ADBE Text Animators")(j)("ADBE Text Selectors")(2)("ADBE Text Range Type2").setValue(1) //add animator with index (j)
                            }
                        }
                        dialogWindow.close();
                    };
                    charexcludeButton.onClick = function () {
                        for (h = 0; h < totalAlign.length; h++) {
                            for (j = 1; j <= app.project.activeItem.selectedLayers[h].text.animator.numProperties; j++) {
                                thisLayers = app.project.activeItem.selectedLayers[h];
                                thisLayers("ADBE Text Properties")("ADBE Text Animators")(j)("ADBE Text Selectors")(2)("ADBE Text Range Type2").setValue(2);//add animator with index (j)
                            }
                        }
                        dialogWindow.close();
                    };
                    wordButton.onClick = function () {
                        for (h = 0; h < totalAlign.length; h++) {
                            for (j = 1; j <= app.project.activeItem.selectedLayers[h].text.animator.numProperties; j++) {
                                thisLayers = app.project.activeItem.selectedLayers[h];
                                thisLayers("ADBE Text Properties")("ADBE Text Animators")(j)("ADBE Text Selectors")(2)("ADBE Text Range Type2").setValue(3); //add animator with index (j)
                            }
                        }
                        dialogWindow.close();
                    };
                    lineButton.onClick = function () {
                        for (h = 0; h < totalAlign.length; h++) {
                            for (j = 1; j <= app.project.activeItem.selectedLayers[h].text.animator.numProperties; j++) {
                                thisLayers = app.project.activeItem.selectedLayers[h];
                                thisLayers("ADBE Text Properties")("ADBE Text Animators")(j)("ADBE Text Selectors")(2)("ADBE Text Range Type2").setValue(4); //add animator with index (j)
                            }
                        }
                        dialogWindow.close();
                    };
                    // Show Window
                    dialogWindow.center();
                    dialogWindow.show();
                }
            }
            copyButtons.onClick = function () {
                if (app.project.activeItem == null) {
                    return false;
                }
                textCheck = app.project.activeItem.selectedLayers[0];
                if (app.project.activeItem.selectedLayers.length > 1) {
                    alert("Please Select Only 1 Layer!");
                    return false;
                }
                if (app.project.activeItem.selectedLayers.length < 1 || textCheck("ADBE Text Properties")("ADBE Text Animators")("ADBE Text Animator") == null || textCheck.matchName != "ADBE Text Layer") {
                    return false;
                }
                copySelect = app.project.activeItem.selectedLayers[0];
                if (copySelect.text.Animators.numProperties > 1) {
                    for (num = 2; num <= copySelect.text.Animators.numProperties; num++) {
                        if (copySelect.effect("A_Text") != null) {
                            copySelect.effect("A_Text").selected = true;
                            copySelect.effect("A_Text " + num).selected = true;
                        } else if (copySelect.effect("A_Text3D") != null) {
                            copySelect.effect("A_Text3D").selected = true;
                            copySelect.effect("A_Text3D " + num).selected = true;
                        }//end elseif
                    }//end for
                } else if (copySelect.text.Animators.numProperties == 1) {
                    if (copySelect.effect("A_Text") != null) {
                        copySelect.effect("A_Text").selected = true;
                    } else if (copySelect.effect("A_Text3D") != null) {
                        copySelect.effect("A_Text3D").selected = true;
                    }//end elseif
                }
                for (j = 1; j <= app.project.activeItem.selectedLayers[0].text.animator.numProperties; j++) {
                    copySelect.property("ADBE Text Properties")("ADBE Text Animators")(j).selected = true; //selected Animator (Aw_Text)
                }
                app.executeCommand(app.findMenuCommandId("Copy")); //click (ctrl+c);
            }

            pasteButtons.onClick = function () {
                if (app.project.activeItem == null) {
                    return false;
                }
                textCheck = app.project.activeItem.selectedLayers[0];
                if (app.project.activeItem.selectedLayers < 1 || textCheck.matchName != "ADBE Text Layer") {
                    return false; //if not selected layer or if not text layer return false;
                }
                app.executeCommand(app.findMenuCommandId("Paste")); //click (ctrl + v);
            }
            directionButtons.onClick = function () {
                if (app.project.activeItem == null) {
                    return false;
                }
                textCheck = app.project.activeItem.selectedLayers[0];
                if (app.project.activeItem.selectedLayers < 1 || textCheck.matchName != "ADBE Text Layer" || textCheck("ADBE Text Properties")("ADBE Text Animators")("ADBE Text Animator") == null) {
                    return false;
                }
                directionLayer = app.project.activeItem.selectedLayers;
                var totalDirection = [];
                for (i = 0; i < directionLayer.length; i++) {
                    totalDirection.push(directionLayer[i].index);
                } //Add all selected layer to Array (totalDirection)
                for (i = 0; i < totalDirection.length; i++) { // for array totalDirection.length
                    frontDirection2D = 'delay = thisLayer.effect("A_Text")("Delay");\
                                fullDelay = delay * (textIndex - 1) * thisComp.frameDuration;\
                                thisLayer.effect("A_Text")("Animation").valueAtTime(time - fullDelay);';

                    frontDirection3D = 'delay = thisLayer.effect("A_Text3D")("Delay");\
                                fullDelay = delay * (textIndex - 1) * thisComp.frameDuration;\
                                thisLayer.effect("A_Text3D")("Animation").valueAtTime(time - fullDelay);';

                    randomDirection2D = 'delay = thisLayer.effect("A_Text")("Delay");\
                                    seedRandom(textIndex * 999, true)\
                                    fullDelay = delay * textTotal * random() * thisComp.frameDuration / 4;\
                                    thisLayer.effect("A_Text")("Animation").valueAtTime(time - fullDelay);'

                    randomDirection3D = 'delay = thisLayer.effect("A_Text3D")("Delay");\
                                    seedRandom(textIndex * 999, true)\
                                    fullDelay = delay * textTotal * random() * thisComp.frameDuration / 4;\
                                    thisLayer.effect("A_Text3D")("Animation").valueAtTime(time - fullDelay);'

                    backDirection2D = 'delay = thisLayer.effect("A_Text")("Delay");\
                                fullDelay = delay * (textTotal - textIndex) * thisComp.frameDuration;\
                                thisLayer.effect("A_Text")("Animation").valueAtTime(time - fullDelay);'

                    backDirection3D = 'delay = thisLayer.effect("A_Text3D")("Delay");\
                                fullDelay = delay * (textTotal - textIndex) * thisComp.frameDuration;\
                                thisLayer.effect("A_Text3D")("Animation").valueAtTime(time - fullDelay);'

                    // <-----------Declare Window and Button------------->
                    directionWindow = new Window('dialog', "Direction Text", undefined);
                    directionWindow.orientation = 'column';
                    directionGroup = directionWindow.add('group', undefined, '');
                    directionGroup.orientation = 'row';

                    frontButton = directionGroup.add('button', undefined, "Front");
                    frontButton.size = [75, 40];
                    backButton = directionGroup.add('button', undefined, 'Back');
                    backButton.size = [75, 40];
                    randomButton = directionGroup.add('button', undefined, "Random");
                    randomButton.size = [75, 40];
                    // <------------------------------------------------->

                    frontButton.onClick = function () {
                        for (h = 0; h < totalDirection.length; h++) {
                            for (j = 1; j <= app.project.activeItem.selectedLayers[h].text.animator.numProperties; j++) {
                                thisDirection = app.project.activeItem.selectedLayers[h];
                                if (thisDirection.effect("A_Text") != null) {
                                    thisDirection("ADBE Text Properties")("ADBE Text Animators")(j)("ADBE Text Selectors")(2)("ADBE Text Expressible Amount").expression = frontDirection2D;
                                    directionWindow.close();
                                } else if (thisDirection.effect("A_Text3D") != null) {
                                    thisDirection("ADBE Text Properties")("ADBE Text Animators")(j)("ADBE Text Selectors")(2)("ADBE Text Expressible Amount").expression = frontDirection3D;
                                    directionWindow.close();
                                }
                            }
                        }
                    };
                    backButton.onClick = function () {
                        for (h = 0; h < totalDirection.length; h++) {
                            for (j = 1; j <= app.project.activeItem.selectedLayers[h].text.animator.numProperties; j++) {
                                thisDirection = app.project.activeItem.selectedLayers[h];
                                if (thisDirection.effect("A_Text") != null) {
                                    thisDirection("ADBE Text Properties")("ADBE Text Animators")(j)("ADBE Text Selectors")(2)("ADBE Text Expressible Amount").expression = backDirection2D;
                                    directionWindow.close();
                                } else if (thisDirection.effect("A_Text3D") != null) {
                                    thisDirection("ADBE Text Properties")("ADBE Text Animators")(j)("ADBE Text Selectors")(2)("ADBE Text Expressible Amount").expression = backDirection3D;
                                    directionWindow.close();
                                }
                            }
                        }
                    };
                    randomButton.onClick = function () {
                        for (h = 0; h < totalDirection.length; h++) {
                            for (j = 1; j <= app.project.activeItem.selectedLayers[h].text.animator.numProperties; j++) {
                                thisDirection = app.project.activeItem.selectedLayers[h];
                                if (thisDirection.effect("A_Text") != null) {
                                    thisDirection("ADBE Text Properties")("ADBE Text Animators")(j)("ADBE Text Selectors")(2)("ADBE Text Expressible Amount").expression = randomDirection2D;
                                    directionWindow.close();
                                } else if (thisDirection.effect("A_Text3D") != null) {
                                    thisDirection("ADBE Text Properties")("ADBE Text Animators")(j)("ADBE Text Selectors")(2)("ADBE Text Expressible Amount").expression = randomDirection3D;
                                    directionWindow.close();
                                }
                            }
                        }
                    };
                } //end for
                directionWindow.center();
                directionWindow.show();
            }

            //<---------------------Move Anhcor-------------------------------->
            function moveAnchorPoint(numeric, trufals) {
                if (app.project.activeItem == null) {
                    return false;
                }
                if (app.project.activeItem.selectedLayers == null) {
                    return false; //have selected layer or not?
                }
                if (app.project.activeItem.selectedLayers.length < 1) {
                    return false; //have selected layer or not?
                }
                app.beginUndoGroup("moveAnchorPoint");
                thisAnchor = app.project.activeItem.selectedLayers;

                for (i = 0; i < thisAnchor.length; i++) {
                    if (thisAnchor instanceof CameraLayer) {
                        alert("Camera Layer Dont Have Anchor Point");
                        return false;
                    }
                    //check if layer locked, return;
                    if (thisAnchor[i].anchorPoint.expressionEnabled == true) {
                        continue;
                    }

                    widths = thisAnchor[i].sourceRectAtTime(thisAnchor[i].containingComp.time, trufals).width;
                    heights = thisAnchor[i].sourceRectAtTime(thisAnchor[i].containingComp.time, trufals).height;
                    tops = thisAnchor[i].sourceRectAtTime(thisAnchor[i].containingComp.time, trufals).top;
                    lefts = thisAnchor[i].sourceRectAtTime(thisAnchor[i].containingComp.time, trufals).left;

                    //check Ignore Mask clicked or not
                    noMasks = true;
                    if (ignoreMasks.value == true) {
                        noMasks = true;
                    } else {
                        if (thisAnchor[i].mask.numProperties != 0) {
                            for (numProp = 1; numProp <= thisAnchor[i].mask.numProperties; numProp++) {
                                if (thisAnchor[i].mask(numProp).maskMode != MaskMode.NONE) {
                                    noMasks = false;
                                }
                            }
                        }
                    }
                    if (noMasks) {
                        switch (numeric) {
                            case 1:
                                panjang = 0;
                                lebar = 0;
                                break;
                            case 2:
                                panjang = 0.5;
                                lebar = 0;
                                break;
                            case 3:
                                panjang = 1;
                                lebar = 0;
                                break;
                            case 4:
                                panjang = 0;
                                lebar = 0.5;
                                break;
                            case 5:
                                panjang = 0.5;
                                lebar = 0.5;
                                break;
                            case 6:
                                panjang = 1;
                                lebar = 0.5;
                                break;
                            case 7:
                                panjang = 0;
                                lebar = 1;
                                break;
                            case 8:
                                panjang = 0.5;
                                lebar = 1;
                                break;
                            case 9:
                                panjang = 1;
                                lebar = 1;
                                break;
                            default:
                        }
                        x = widths * panjang + lefts;
                        y = heights * lebar + tops;
                    } else {

                        var arrayX = Array();
                        var arrayY = Array();
                        numPropMask = thisAnchor[i].mask.numProperties;

                        //count how many vertices in one layer
                        for (var numMaskProp = 1; numMaskProp <= numPropMask; numMaskProp++) {
                            var verMask = thisAnchor[i].mask(numMaskProp).maskShape.value.vertices.length; //Masks > Mask Path > value vertices of Mask > length
                            if (thisAnchor[i].mask(numMaskProp).maskMode == MaskMode.NONE) { continue; } //if maskmode is None; continue
                            for (k = 0; k < verMask; k++) {
                                currentVert = thisAnchor[i].mask(numMaskProp).maskShape.valueAtTime(thisAnchor[i].containingComp.time, false).vertices[k]; //find coordinate vertices (loops)
                                arrayX.push(currentVert[0]);
                                arrayY.push(currentVert[1]);
                            }
                        }

                        arrayX.sort(function (a, b) { return a - b }); //sorts low to high
                        arrayY.sort(function (a, b) { return a - b });

                        xL = arrayX.shift(); //put first index array (lower)
                        xH = arrayX.pop(); //put last index array (higher)
                        yL = arrayY.shift();
                        yH = arrayY.pop();

                        if (thisAnchor[i] instanceof TextLayer || thisAnchor[i] instanceof ShapeLayer) { //if layer is text or shape
                            xLow = thisAnchor[i].sourceRectAtTime(thisAnchor[i].containingComp.time, trufals).left;
                            xHigh = xLow + thisAnchor[i].sourceRectAtTime(thisAnchor[i].containingComp.time, trufals).width;
                            yLow = thisAnchor[i].sourceRectAtTime(thisAnchor[i].containingComp.time, trufals).top;
                            yHigh = yLow + thisAnchor[i].sourceRectAtTime(thisAnchor[i].containingComp.time, trufals).height;

                            if (xL < xLow) { xL = xLow };
                            if (xH > xHigh) { xH = xHigh };
                            if (yL < yLow) { yL = yLow };
                            if (yH > yHigh) { yH = yHigh };
                        }
                        switch (numeric) {
                            case 1:
                                x = xL;
                                y = yL;
                                break;
                            case 2:
                                x = xL + ((xH - xL) / 2);
                                y = yL;
                                break;
                            case 3:
                                x = xH;
                                y = yL;
                                break;
                            case 4:
                                x = xL;
                                y = yL + ((yH - yL) / 2);
                                break;
                            case 5:
                                x = xL + ((xH - xL) / 2);
                                y = yL + ((yH - yL) / 2);
                                break;
                            case 6:
                                x = xH;
                                y = yL + ((yH - yL) / 2);
                                break;
                            case 7:
                                x = xL;
                                y = yH;
                                break;
                            case 8:
                                x = xL + ((xH - xL) / 2);;
                                y = yH;
                                break;
                            case 9:
                                x = xH;
                                y = yH;
                                break;
                            default:
                        }
                    }

                    if (thisAnchor[i].anchorPoint.isTimeVarying) { //jika layer itu bergerak
                        thisAnchor[i].anchorPoint.setValueAtTime(thisAnchor[i].containingComp.time, [x, y]); //buat value di waktu saat ini
                    } else {
                        //langkah ini untuk melihat apakah layer sudah discale apa belum
                        //sudah/belum tetap dihitung berapa presentasi scale tersebut
                        currentX = thisAnchor[i].anchorPoint.value[0];
                        currentY = thisAnchor[i].anchorPoint.value[1];
                        xMove = (x - currentX) * (thisAnchor[i].scale.value[0] / 100);
                        yMove = (y - currentY) * (thisAnchor[i].scale.value[1] / 100);

                        //untuk dapat menggerakan position, maka harus mendisable expression sementara
                        posExpression = false;
                        if (thisAnchor[i].position.expressionEnabled == true) {
                            thisAnchor[i].position.expressionEnabled == false;
                            posExpression = true;
                        }
                        //untuk mendapatkan position value yang sama persis dengan anchor point,
                        //maka harus duplikat layer tersebut dan memparent layer tersebut dengan,
                        //layer yang terduplikat dengan layar yang terduplikat dibawah layar main.
                        //lalu scale si layer duplikat dibuat 100.
                        //setting anchor point ke x dan y
                        //buat ifelse apakah position bergerak (isTimeVarying), jika iya cari berapa,
                        //banyak key lalu buat for loop untuk mengganti ke setiap position key

                        duplicatedLayer = thisAnchor[i].duplicate();
                        oldParent = thisAnchor[i].parent;
                        duplicatedLayer.moveToEnd();

                        if (duplicatedLayer.scale.isTimeVarying) {
                            duplicatedLayer.scale.setValueAtTime(thisAnchor[i].containingComp.time, [100, 100]);
                        } else {
                            duplicatedLayer.scale.setValue([100, 100]);
                        }
                        thisAnchor[i].parent = duplicatedLayer;
                        thisAnchor[i].anchorPoint.setValue([x, y]); //ubah anchor point ke anchorpoint yang ditentukan

                        if (thisAnchor[i].position.isTimeVarying) {
                            for (keyPos = 1; keyPos <= thisAnchor[i].position.numKeys; keyPos++) {
                                currentPos = thisAnchor[i].position.keyValue(keyPos);
                                currentPos[0] += xMove;
                                currentPos[1] += yMove;
                                thisAnchor[i].position.setValueAtKey(keyPos, [currentPos[0], currentPos[1]]);
                            }
                        } else {
                            curPos = thisAnchor[i].position.value;
                            thisAnchor[i].position.setValue([curPos[0] + xMove, curPos[1] + yMove, curPos[2]]); //ubah position ke position yang sudah ditentukan
                        }

                        thisAnchor[i].parent = oldParent;
                        if (posExpression) {
                            thisAnchor.position.expressionEnabled = true;
                            posExpression = false;
                        }
                        duplicatedLayer.remove();
                    }
                }
                return 0;
            }
            anchor1.onClick = function () {
                moveAnchorPoint(1, false);
                return false;
            }
            anchor2.onClick = function () {
                moveAnchorPoint(2, false);
                return false;
            }
            anchor3.onClick = function () {
                moveAnchorPoint(3, false);
                return false;
            }
            anchor4.onClick = function () {
                moveAnchorPoint(4, false);
                return false;
            }
            anchor5.onClick = function () {
                moveAnchorPoint(5, false);
                return false;
            }
            anchor6.onClick = function () {
                moveAnchorPoint(6, false);
                return false;
            }
            anchor7.onClick = function () {
                moveAnchorPoint(7, false);
                return false;
            }
            anchor8.onClick = function () {
                moveAnchorPoint(8, false);
                return false;
            }
            anchor9.onClick = function () {
                moveAnchorPoint(9, false);
                return false;
            }
            lockButtons.onClick = function () {
                if (app.project.activeItem == null) {
                    return false;
                }
                if (app.project.activeItem.selectedLayers == null) {
                    return false; //have selected layer or not?
                }
                if (app.project.activeItem.selectedLayers.length < 1) {
                    return false; //have selected layer or not?
                }
                var thisLock = app.project.activeItem.selectedLayers;
                for (var i = 0; i < thisLock.length; i++) {
                    xValue = thisLock[i].anchorPoint.value[0];
                    yValue = thisLock[i].anchorPoint.value[1];
                    thisLock[i].property("ADBE Transform Group").property("ADBE Anchor Point").expression = 'x=' + xValue + ";" + 'y=' + yValue + ";" + '[x,y];'
                }
            }
            releaseButtons.onClick = function () {
                if (app.project.activeItem == null) {
                    return false;
                }
                if (app.project.activeItem.selectedLayers == null) {
                    return false; //have selected layer or not?
                }
                if (app.project.activeItem.selectedLayers.length < 1) {
                    return false; //have selected layer or not?
                }
                var thisLock = app.project.activeItem.selectedLayers;
                for (var i = 0; i < thisLock.length; i++) {
                    xValue = thisLock[i].anchorPoint.value[0];
                    yValue = thisLock[i].anchorPoint.value[1];
                    thisLock[i].property("ADBE Transform Group").property("ADBE Anchor Point").expression = "";
                }
            }

            //<-------------------------Expression Executor------------------------------->
            //describe Folder Path Script
            //use .getFiles() to get file name
            //use .name to get name only
            //use replace(%20, "") to replace
            folder = Folder("../ScriptUI Panels/Aw_Tools");
            thisFolder = folder.getFiles("*.txt");
            for (numFile = 0; numFile < thisFolder.length; numFile++) {
                dropDownExpressions.add("item", thisFolder[numFile].name.replace(/%20/g, " "));
            }
            executeButtons.onClick = function () {
                if (app.project.activeItem == null) {
                    return false;
                }
                if (app.project.activeItem.selectedLayers == null) {
                    return false; //have selected layer or not?
                }
                if (app.project.activeItem.selectedLayers.length < 1) {
                    return false; //have selected layer or not?
                }
                app.beginUndoGroup("Execute");
                thisExecute = app.project.activeItem.selectedLayers;
                //get selection in dropDownList with .index
                if (dropDownExpressions.selection == null) {
                    return false;
                }
                expressionFile = File("../Support Files/Scripts/ScriptUI Panels/Aw_Tools/" + dropDownExpressions.selection.toString());
                expressionFile.open("r");
                hasilRead = expressionFile.read();
                expressionFile.close();
                // alert(app.project.activeItem.selectedProperties.selectedKeys);
                for (ik = 0; ik < thisExecute.length; ik++) {
                    for (numExp = 0; numExp < thisExecute[ik].selectedProperties.length; numExp++) {
                        selectProperty = thisExecute[ik].selectedProperties[numExp];
                        selectProperty.expression = hasilRead.toString();
                    }
                }
            }

            //<------------------------------Move Frame------------------------------------->
            function moveFrame(frames) {
                if (app.project.activeItem == null) {
                    return false; //have selected layer or not?
                }
                var thisMoveFrame = app.project.activeItem;
                if (thisMoveFrame == null) { alert("You Are Not Selected Composition!"); return false; }

                thisMoveFrame.time = thisMoveFrame.time + frames * thisMoveFrame.frameDuration;
            }
            plus5.onClick = function () {
                moveFrame(5);
            }
            plus10.onClick = function () {
                moveFrame(10);
            }
            plus15.onClick = function () {
                moveFrame(15);
            }
            min5.onClick = function () {
                moveFrame(-5);
            }
            min10.onClick = function () {
                moveFrame(-10);
            }
            min15.onClick = function () {
                moveFrame(-15);
            }

            //<------------------------Line Cap-------------------------->
            buttButtons.onClick = function () {
                changeLine(1);
            }
            roundButtons.onClick = function () {
                changeLine(2);
            }
            projectButtons.onClick = function () {
                changeLine(3);
            }
            switchButtons.onClick = function () {
                switch (capTexts.text) {
                    case "Unknown":
                        capTexts.text = "Line Cap";
                        break;
                    case "Line Join":
                        capTexts.text = "Line Cap";
                        break;
                    case "Line Cap":
                        capTexts.text = "Line Join";
                        break;
                    default:
                        break;
                }
            }

            function changeLine(valuer) {
                if (app.project.activeItem == null) {
                    return false;
                }
                if (app.project.activeItem.selectedLayers == null) {
                    return false; //have selected layer or not?
                }
                if (app.project.activeItem.selectedLayers.length < 1) {
                    return false; //have selected layer or not?
                }
                var thisButt = app.project.activeItem.selectedLayers;
                for (k = 0; k < thisButt.length; k++) {
                    if (!(thisButt[k] instanceof ShapeLayer)) { continue };
                    for (l = 1; l <= thisButt[k]("ADBE Root Vectors Group").numProperties; l++) {
                        switch (capTexts.text) {
                            case "Line Join":
                                thisButt[k]("ADBE Root Vectors Group")(l)("ADBE Vectors Group")(2)("ADBE Vector Stroke Line Join").setValue(valuer);
                                break;
                            case "Line Cap":
                                thisButt[k]("ADBE Root Vectors Group")(l)("ADBE Vectors Group")(2)("ADBE Vector Stroke Line Cap").setValue(valuer);
                                break;
                            default:
                                break;
                        }
                    }

                }
            }

            myWindow.onResizing = myWindow.onResize = function () {
                this.layout.resize();
            };

            myWindow.layout.layout(true);
            return myWindow;
        }

        var myBuildUI = myScript_buildUI(thisObj);
        if (myBuildUI != null && myBuildUI instanceof Window) {
            //myBuildUI.center();
            myBuildUI.show();
        }
    }
    myScript(this);
}