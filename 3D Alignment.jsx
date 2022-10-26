(function (thisObj) {
    buildUI(thisObj); // Calling the function to build the panel
    function buildUI(thisObj) {
        var windowName = "3D Alignment";
        var myWindow = (thisObj instanceof Panel) ? thisObj : new Window("window", windowName, undefined, {
            resizeable: true
        });

        myWindow.orientation = "column";

        upperGroup = myWindow.add("Group");
        upperGroup.orientation = "row";
        upperGroup.spacing = 3;

        textComp = upperGroup.add("statictext", undefined, "Align Layer To");
        textComp.alignment = "left"

        dropdown3D = upperGroup.add("dropdownlist");
        dropdown3D.add("item", "Composition");
        dropdown3D.add("item", "Selection");
        dropdown3D.selection = 0;
        dropdown3D.helpTip = "Align Option"

        lowerGroup = myWindow.add("Group");
        lowerGroup.orientation = "row";
        lowerGroup.spacing = 5;

        {
            imageLeft = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x14\x00\x00\x00\x14\b\x04\x00\x00\x00'\u0080\u00D5\u0086\x00\x00\x00\x04gAMA\x00\x00\u00B1\u008F\x0B\u00FCa\x05\x00\x00\x00 cHRM\x00\x00z&\x00\x00\u0080\u0084\x00\x00\u00FA\x00\x00\x00\u0080\u00E8\x00\x00u0\x00\x00\u00EA`\x00\x00:\u0098\x00\x00\x17p\u009C\u00BAQ<\x00\x00\x00\x02bKGD\x00\u00FF\u0087\u008F\u00CC\u00BF\x00\x00\x00\x07tIME\x07\u00E6\n\x16\x057\x13!ya\u00DC\x00\x00\x00\u00ADIDAT(\u00CF\u00B5\u00931\n\u00C20\x14\u0086\u00BF\x17z\u008F\u008E\u00E2\u00EC\u00EC$\x14\u00BC\u0081\u00B3n\u009E\u00C1\x138x\x03\u009D=\u0082\u00BA\u00EA&.\u0082\u00E8\"\u00E25\u008A\u00FA\x1CRB[\u0092\x12\u008A\u00FESB>\u00F2\u00DE\u00FBB\x04\x14@P\x10\u00C21\x00\u008C\u00D80\u00A01\x16\u00EC\u0090\u0091\u00C6\u0080\x11I\u00DC\u00EAEO\u00A7\u00B6W\fw\u00E6\u00E4\u00E2\x05?t\x19\u00BB\u00DD\u0099\x05y\u00AB\u00D2-z4<\u00D8\x16*\rW\u00DE!0a\u00CF\u00B0t\u00A2!\u00B0\x1Eq\u00AC\u0082T\u00F4\u00F4\u0099y\u00A7X\u00B2\u00AE\u00EAI\u00C9\u00BCw\x1F\u00FE\u00AF\u00E7\u00C2\u00AAx\u00C2\u00F2H\u00C2\u00B1\u00AE\u00E7$\u0093\x1F\u0094\u00B6\u00E0\u008D\x1D\u00CFfPb\u00BF\u00C2\x17\u00ACn#\u0084/\u0088s\u00FE\x00\x00\x00%tEXtdate:create\x002022-10-22T05:55:19+03:00\u00D5\u00E1\x1F&\x00\x00\x00%tEXtdate:modify\x002022-10-22T05:55:19+03:00\u00A4\u00BC\u00A7\u009A\x00\x00\x00\x00IEND\u00AEB`\u0082"
            imageHorizontal = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x14\x00\x00\x00\x14\b\x04\x00\x00\x00'\u0080\u00D5\u0086\x00\x00\x00\x04gAMA\x00\x00\u00B1\u008F\x0B\u00FCa\x05\x00\x00\x00 cHRM\x00\x00z&\x00\x00\u0080\u0084\x00\x00\u00FA\x00\x00\x00\u0080\u00E8\x00\x00u0\x00\x00\u00EA`\x00\x00:\u0098\x00\x00\x17p\u009C\u00BAQ<\x00\x00\x00\x02bKGD\x00\u00FF\u0087\u008F\u00CC\u00BF\x00\x00\x00\x07tIME\x07\u00E6\n\x16\x056\x19\u00D8\u00B7\u00B9\u0083\x00\x00\x00\u00E3IDAT(\u00CF\u00B5\u0093-o\x02A\x14E\u00CF\u00DB\u00A0H\u00C1\u00AD\x00\u00B7H\x04\u00A9'A \u00FB\u008B\x10\u0095\b4\u00FF\x03K\u00AA\x10$$(\u00C2\x1A\x14\u00BA\x15\x18h\x17\u00E4^\x04,\u00CC\u00CE\u00F2ez\u00D4\u00E4\u00BD\u009B;\u00F3n\u00DE\x189\x04`\u00A7\u0083\u00E5:\x01>!C\u0086\u0084~\u00B9T\x10V\u00E8\x00\x156\u00CF\u0084B\u00D9\x1B\\\u00CCUP\u00A7G\u008D.0\u00E1\u0087\x01\u00DF\u00C6\r\u0084Z\u00DA+c\u00AF\u0096k\x1B\u00F0\"/\x0B\u00F3\u00C3\u00EC\u00F8\u00E2\u008D\x14\bH\u00D8\u00DD\x1F\u00E6\x14O\x1B\u0098\u00F1\u00E7\u00B5\u00B3Dd2\u0099P\u00A4\u00B9\u00E6\u008A\u009C\u00CA\u00D5Q\x10\u00F2I\u0093\x14Q\u00E6\x1DXr\u00C0\bX\u00D1gc\u008EcC\x0B\u00DDb\u00A1\u0086\u00FE9\u009E-#b\u00D2\u00CB\u00F8v\u00B6Y\u00B3-\u00C4s\u00D6T\u00F9\x00\u00C6\u00FC\u00DA\u00A3\x0B\u0084\"\u00C5\u008A\x15\u00F9\u00EBS\\\u00B3\u0084)\u0090\u00F8\u00E5\u00E2\u00D5w\u00BE\u00C2\x11\u00E2.o\u00D5\u00DA>J4\x00\x00\x00%tEXtdate:create\x002022-10-22T05:54:25+03:00s\f\x19\u008F\x00\x00\x00%tEXtdate:modify\x002022-10-22T05:54:25+03:00\x02Q\u00A13\x00\x00\x00\x00IEND\u00AEB`\u0082"
            imageRight = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x14\x00\x00\x00\x14\b\x04\x00\x00\x00'\u0080\u00D5\u0086\x00\x00\x00\x04gAMA\x00\x00\u00B1\u008F\x0B\u00FCa\x05\x00\x00\x00 cHRM\x00\x00z&\x00\x00\u0080\u0084\x00\x00\u00FA\x00\x00\x00\u0080\u00E8\x00\x00u0\x00\x00\u00EA`\x00\x00:\u0098\x00\x00\x17p\u009C\u00BAQ<\x00\x00\x00\x02bKGD\x00\u00FF\u0087\u008F\u00CC\u00BF\x00\x00\x00\x07tIME\x07\u00E6\n\x16\b7\x06D|\x16d\x00\x00\x00\u00AEIDAT(\u00CF\u00B5\u0093\u00BD\t\x02A\x10\u0085\u00BF\u0091\u00C36DD8\x10\u00B4\b\u00C5\x0EDs\x0B0\u00B3\x03[06\u00B0\u0086CL\u00C4\u00D4\x064\u00BD\u00D4\x0E\x04\u00BD1\u00B8u]\u008Fu]D_\u00B4\x0B\u008F\u00F7\x07#\x04\u00A0\x00\u0082\u0082P#\u008C>\x1B\u00C6\u00C0Gb\u0083!i\f\u00D1\"\u00A9d\u00AA3\u00A7Ea\u00B2-\u00B9z\u0089@\u00C2\u0088\u00AE\u00FD\u00ED(\x1E\u00CFh\u00EB\u00EF2\x027\u00F6\u009C\u008D\u00A1\u0092\u00D3|G\u00BC0{i\u00D7v\u0088f\u00FF(\u00EB\t\u00D3g?GoQ\u009D'e\u00E0\u0095Y\u00FF\x7F\u009E\x03+\u00B4le!(G:\x0EQ #\u00F3\u00A9(\u00F4~\u009E1g\u00CB\u00A9L\x12\u0080{\nwAH'|\u00FF\x1F\x14=\x00\x00\x00%tEXtdate:create\x002022-10-22T05:55:06+03:00\u00EF\x03oQ\x00\x00\x00%tEXtdate:modify\x002022-10-22T05:55:06+03:00\u009E^\u00D7\u00ED\x00\x00\x00\x00IEND\u00AEB`\u0082"

            imageTop = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x14\x00\x00\x00\x14\b\x04\x00\x00\x00'\u0080\u00D5\u0086\x00\x00\x00\x04gAMA\x00\x00\u00B1\u008F\x0B\u00FCa\x05\x00\x00\x00 cHRM\x00\x00z&\x00\x00\u0080\u0084\x00\x00\u00FA\x00\x00\x00\u0080\u00E8\x00\x00u0\x00\x00\u00EA`\x00\x00:\u0098\x00\x00\x17p\u009C\u00BAQ<\x00\x00\x00\x02bKGD\x00\u00FF\u0087\u008F\u00CC\u00BF\x00\x00\x00\x07tIME\x07\u00E6\n\x16\b64\u0095\u00B0v\u00A5\x00\x00\x00\u009BIDAT(\u00CF\u00B5\u008F1\x0E\x01a\x10\u0085\u00BF\u00F7\u00DBc\u0088(E\u00AFV\u00B8\u0084\u008B\u00B8\u00CD^@\u00A1\u00DFF\u00A1V\x13*\".!\u00D9x\n\u00B2\u00FE\u0095\u00F8WX\u00AF\u0099\u00CC\u00E4\u009B\u0099\u00F7\u00A0m\u00C90e\u00C85\u00C1\x046\u00CC\u00B1\\\u00B8I\u0085%\u00C3\u0084>\u00A6|\\\rdP\u00EB\u00C4\u0091\u00A5\u00EE\u00D7\r#\x06\x18qb\x05\u008C\u00E9a\u00C4\u008E\u00B5b\x1B\u00C6\u00F9\u00F3Md'we\u00B4\u008AU\u00ABz\u0099F`\u0083\u00DA\x07\u00B37\u00F3=]J2\x0Ei\u00D0\u00CC\u00E8\x00P&A\u00C1\u00E5\u00FFa\u00BEH\u00BD\u00E0\u008C\tl\u00F1\u00A7\u00CB\u00BF\u00E9\x06\u009D\u009BY\u00B0N.\u00FF\u00AD\x00\x00\x00%tEXtdate:create\x002022-10-22T05:54:52+03:00\u00BCn.\x18\x00\x00\x00%tEXtdate:modify\x002022-10-22T05:54:52+03:00\u00CD3\u0096\u00A4\x00\x00\x00\x00IEND\u00AEB`\u0082"
            imageVertical = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x14\x00\x00\x00\x14\b\x04\x00\x00\x00'\u0080\u00D5\u0086\x00\x00\x00\x04gAMA\x00\x00\u00B1\u008F\x0B\u00FCa\x05\x00\x00\x00 cHRM\x00\x00z&\x00\x00\u0080\u0084\x00\x00\u00FA\x00\x00\x00\u0080\u00E8\x00\x00u0\x00\x00\u00EA`\x00\x00:\u0098\x00\x00\x17p\u009C\u00BAQ<\x00\x00\x00\x02bKGD\x00\u00FF\u0087\u008F\u00CC\u00BF\x00\x00\x00\x07tIME\x07\u00E6\n\x16\x057+\t{\u00D9B\x00\x00\x00\u00F8IDAT(\u00CF\u00CD\u00921J\x03A\x18\u0085\u00BF\u00C9LV$\x1A\x12\u0094\u00AD\u00C4 \u00C9\x05<\u0087m\u00AA\u00DC e\u00ECl=\u0080\u0090^O\u0090\x03\u0088\u00AD\u0082BP\u00C4\u00C6\u00C2\u00C2\u0090F\u00C2f\u00D2\x04c\x11\x16\u009E\u00C5.K\u008A\u00DD\u00A4L^3\u00F3\x0F\u008F\u00F7?>\x06\u00B6&\u0093\x1C\u0082:U\x00\x16x\u0093ct\u00D9\u00ADK\u009B\x18\u00C7#=\u00B4\u00CE\u00D8\u00E4\x1C\u0080i\u00FEj\u0097\u00F7(hPC\u0080\u00E7')R*h~\u00C3\u0090\x17^\u00B9\u00CA\x12\x05\u00C7T\u00F0\u0099i\u009FSf\x1C\x10\x10\x00!'\u00B2,\u00F0\u00C8\u00A8\u00AFwut\u00ABDs=\u00EBB\u00F7\u00E9\u00E4\u00F5\u00A6\x0F\u00F5e\x1C`\u00D9\u00C3f\u0089%\u0082\u0095B\u0096\u00802\x16\x10\n\u00D5\u00D2\u00A1\u00EE\u00D2\u008C'5U\u00D5C:\rt\u00A6\u0096B\u00E1\fDD+\u00E0\u00FE\u00F8\x06~Y\x12Sf\u00C2\u00C8\x14\u00E3A\\r\u009D\u00E2Y\u00C7\u00D1\u00C0\u0098q\x11\u00F0\x11\u009F\u00C4X\u00BE6}\u008A#\u00EA\x00\u00CC\u0089\f;\u00A5\x7F\u0097\u00F9kM\u00F1\u00EF\u00A0*\x00\x00\x00%tEXtdate:create\x002022-10-22T05:55:43+03:009qN\f\x00\x00\x00%tEXtdate:modify\x002022-10-22T05:55:43+03:00H,\u00F6\u00B0\x00\x00\x00\x00IEND\u00AEB`\u0082"
            imageBottom = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x14\x00\x00\x00\x14\b\x04\x00\x00\x00'\u0080\u00D5\u0086\x00\x00\x00\x04gAMA\x00\x00\u00B1\u008F\x0B\u00FCa\x05\x00\x00\x00 cHRM\x00\x00z&\x00\x00\u0080\u0084\x00\x00\u00FA\x00\x00\x00\u0080\u00E8\x00\x00u0\x00\x00\u00EA`\x00\x00:\u0098\x00\x00\x17p\u009C\u00BAQ<\x00\x00\x00\x02bKGD\x00\u00FF\u0087\u008F\u00CC\u00BF\x00\x00\x00\x07tIME\x07\u00E6\n\x16\x056*gg\u00D8\u0095\x00\x00\x00\u00A7IDAT(\u00CF\u00CD\u00D1;JC\x01\x10\u0085\u00E1o\u00AE\x17\u00DCE\u00D0J\u00B1\x17K\x0B;\x17\u00E4&\\C\u00B0\u00CD\x12baa%x\u00EB\u0088\u00A5\u00B8\f\t9\x167\x10c\x1E\nI\u0091\u00D3\f3\u00F33O\u00F6\u00AD\u00EAM\u00B8u%\x1AoF\u00B5\u0099\u008F\f\u00D3\u00EB1k\u00B9\u00E6\u00BF\u00AD\u00F7\x0F\u00B6\u00EB'v\u00EC\bL}\u00D5\u0096\u008A\u00E5^\u00E7E\u00E7nkE\u009C\u00B9\x00\u00A7\x07\u00B0\u00F5\x02\u00CC\u0092\u00CD\u00AF\u00E8\u008F__:\x17\u00E5\u00D33\u00AE\rDy\u00D7\u00F5H\u0085\x1B'bj6\u00EF\u00D1\u00B2\u00E4\u0095\x0FOR\x19\u00E7/\u008DS\u00ADx\u00F0j\u00B6\u0098f\u00E5\u00F8\u008D\u00C9\u00C6\u00EC\x0E\u00FA\x06!\u00EDT\u00C3\x1AQ\u00AA\u0093\x00\x00\x00%tEXtdate:create\x002022-10-22T05:54:42+03:00p\u00C4.\u0086\x00\x00\x00%tEXtdate:modify\x002022-10-22T05:54:42+03:00\x01\u0099\u0096:\x00\x00\x00\x00IEND\u00AEB`\u0082"
        }

        left3dPosition = lowerGroup.add("iconbutton", undefined, imageLeft, { style: "toolbutton" })
        horizontal3dPosition = lowerGroup.add("iconbutton", undefined, imageHorizontal, { style: "toolbutton" })
        right3dPosition = lowerGroup.add("iconbutton", undefined, imageRight, { style: "toolbutton" })

        top3dPosition = lowerGroup.add("iconbutton", undefined, imageTop, { style: "toolbutton" })
        vertical3dPosition = lowerGroup.add("iconbutton", undefined, imageVertical, { style: "toolbutton" })
        buttom3dPosition = lowerGroup.add("iconbutton", undefined, imageBottom, { style: "toolbutton" })

        left3dPosition.size = [25, 25]
        horizontal3dPosition.size = [25, 25];
        right3dPosition.size = [25, 25];

        top3dPosition.size = [25, 25];
        vertical3dPosition.size = [25, 25];
        buttom3dPosition.size = [25, 25];

        left3dPosition.helpTip = "Align Left"
        horizontal3dPosition.helpTip = "Align Horizontal"
        right3dPosition.helpTip = "Align Right"

        top3dPosition.helpTip = "Align Top"
        vertical3dPosition.helpTip = "Align Vertically"
        buttom3dPosition.helpTip = "Align Bottom"

        // distributeGroup = myWindow.add("Group");
        // distributeGroup.orientation = "row";

        // distributeLeft = distributeGroup.add("iconbutton", undefined);
        // distributeLeft.text = "L"
        // distributeLeft.size = [25, 25];

        dropdown3D.onChange = function () {
            if (dropdown3D.selection == 0) {
                lowerGroup.enabled = true;//show this group
            } else if (dropdown3D.selection == 1) {
                lowerGroup.enabled = false;//show this group
            }
        }

        //<------------------HORIZONTAL---------------------->
        function moveAnchorPoint(numberX, numberY) {
            thisSelectedAnchor = app.project.activeItem.selectedLayers;
            thisCompAnchor = app.project.activeItem;

            for (var i = 0; i < thisSelected.length; i++) {
                widthAnchor = thisSelectedAnchor[i].sourceRectAtTime(thisCompAnchor.time, false).width;
                heightAnchor = thisSelectedAnchor[i].sourceRectAtTime(thisCompAnchor.time, false).height;
                leftAnchor = thisSelectedAnchor[i].sourceRectAtTime(thisCompAnchor.time, false).left;
                topAnchor = thisSelectedAnchor[i].sourceRectAtTime(thisCompAnchor.time, false).top;

                x = widthAnchor * numberX + leftAnchor; //untuk anchorpoint
                y = heightAnchor * numberY + topAnchor;

                var currentAnchor = thisSelectedAnchor[i]("ADBE Transform Group")("ADBE Anchor Point").value;

                xMove = (x - currentAnchor[0]) * (thisSelectedAnchor[i]("ADBE Transform Group")("ADBE Scale").value[0] / 100); //untuk position
                yMove = (y - currentAnchor[1]) * (thisSelectedAnchor[i]("ADBE Transform Group")("ADBE Scale").value[1] / 100);

                expressionPosition = false;
                if (thisSelectedAnchor[i]("ADBE Transform Group")("ADBE Position").expressionEnabled == true) {
                    thisSelectedAnchor[i]("ADBE Transform Group")("ADBE Position").expressionEnabled == false;
                    expressionPosition = false;
                }

                oldParent = thisSelectedAnchor[i].parent;
                duplicateLayer = thisSelectedAnchor[i].duplicate();
                duplicateLayer.moveToEnd();

                if (duplicateLayer.isTimeVarying) {
                    duplicateLayer("ADBE Transform Group")("ADBE Scale").setValueAtTime(thisCompAnchor.time, [100, 100]);
                } else {
                    duplicateLayer("ADBE Transform Group")("ADBE Scale").setValue([100, 100]);
                }

                thisSelectedAnchor[i].parent = duplicateLayer; //parent selectedLayer to DuplicateLayer;

                //set Anchor Point and Position
                thisSelectedAnchor[i]("ADBE Transform Group")("ADBE Anchor Point").setValue([x, y]);
                if (thisSelectedAnchor[i]("ADBE Transform Group")("ADBE Position").isTimeVarying) {
                    for (k = 0; k < thisSelectedAnchor[i]("ADBE Transform Group")("ADBE Position").numKey; k++) {
                        keyNumber = thisSelectedAnchor[i]("ADBE Transform Group")("ADBE Position").keyValue(i);
                        keyNumber[0] += xMove;
                        keyNumber[1] += yMove;
                        thisSelectedAnchor[i]("ADBE Transform Group")("ADBE Position").setValueAtTime(k, [keyNumber]);
                    }
                } else {
                    currentPosition = thisSelectedAnchor[i]("ADBE Transform Group")("ADBE Position").value;
                    thisSelectedAnchor[i]("ADBE Transform Group")("ADBE Position").setValue([currentPosition[0] + xMove, currentPosition[1] + yMove, currentPosition[2]]);
                }

                thisSelectedAnchor[i].parent = oldParent;

                if (expressionPosition) {
                    thisSelectedAnchor[i].expressionEnabled == true;
                    expressionPosition = false;
                }
                duplicateLayer.remove();
            }
        }

        function horizontalComp(number) {
            var thisComp = app.project.activeItem;
            var thisSelected = app.project.activeItem.selectedLayers;
            var thisCompX = thisComp.width;

            app.beginUndoGroup("Horizontal Comp");
            for (var i = 0; i < thisSelected.length; i++) {
                leftLayer = thisSelected[i].sourceRectAtTime(thisComp.time, false).left;
                widthLayer = thisSelected[i].sourceRectAtTime(thisComp.time, false).width;
                currentPosition = thisSelected[i]("ADBE Transform Group")("ADBE Position").value;

                //cari titik anchor layer dan titik tengah layer
                titikTengahX = widthLayer * number + leftLayer; //titik tengah layer
                titikAnchorX = thisSelected[i].anchorPoint.value[0];
                //hitung jarak titik anchor ke titik tengah layer
                currentX = thisSelected[i].anchorPoint.value[0];
                xMove = (titikTengahX - currentX) * (thisSelected[i].scale.value[0] / 100);
                //buat layer ke tengah apa adanya
                thisSelected[i]("ADBE Transform Group")("ADBE Position").setValue([(thisCompX * number) - xMove, currentPosition[1], currentPosition[2]]);
            }
            app.endUndoGroup();
        }

        function horizontalSelection(number) {
            app.beginUndoGroup("horizontal selection");

            thisComp = app.project.activeItem;
            thisSelected = app.project.activeItem.selectedLayers;
            thisArray = new Array();
            thisKeyPos = new Array();

            for (i = 0; i < thisSelected.length; i++) {
                width = thisSelected[i].sourceRectAtTime(thisComp.time, false).width; //sisi bawah layer
                left = thisSelected[i].sourceRectAtTime(thisComp.time, false).left; //sisi kiri layer

                //memasukan nilai position agar dilihat mana yang paling kecil
                currentPosition = thisSelected[i]("ADBE Transform Group")("ADBE Position").value; //position Value sekarang
                thisArray.push(currentPosition[0]); //menaruh semua value X ke array untuk disortir
            }
            //mencari nilai X yang paling kecil dan besar
            thisArray.sort(function (a, b) { return a - b });
            xL = thisArray.shift();
            xH = thisArray.pop();

            for (j = 0; j < thisSelected.length; j++) {
                width = thisSelected[j].sourceRectAtTime(thisComp.time, false).width; //sisi bawah layer
                left = thisSelected[j].sourceRectAtTime(thisComp.time, false).left; //sisi kiri layer
                height = thisSelected[j].sourceRectAtTime(thisComp.time, false).height; //sisi bawah layer
                tops = thisSelected[j].sourceRectAtTime(thisComp.time, false).top; //sisi kiri layer

                imaginaryBox = xH - xL;
                currentPosition = thisSelected[j]("ADBE Transform Group")("ADBE Position").value; //position Value sekarang

                //cari titik anchor layer dan titik tengah layer
                titikTengahX = width * number + left; //titik tengah layer
                titikAnchorX = thisSelected[j].anchorPoint.value[0];
                //hitung jarak titik anchor ke titik tengah layer
                jarakAnchor = titikTengahX - titikAnchorX;
                //buat layer ke tengah apa adanya
                if (thisSelected[j].position.value[0] == xL) {
                    xL -= thisSelected[j].anchorPoint.value[0];
                    continue
                }
                //thisKeyPos.push(thisSelected[j].sourceRectAtTime(thisComp.time, false).width - thisSelected[j].anchorPoint.value[0]);
                thisSelected[j]("ADBE Transform Group")("ADBE Position").setValue([(imaginaryBox * number) - jarakAnchor + xL, currentPosition[1], currentPosition[2]]);
                //thisKeyPos.pop()
            }

        }

        left3dPosition.onClick = function () {
            if (dropdown3D.selection == 0) {
                horizontalComp(0);
            }
        }
        horizontal3dPosition.onClick = function () {
            if (dropdown3D.selection == 0) {
                horizontalComp(0.5);
            }
        }
        right3dPosition.onClick = function () {
            if (dropdown3D.selection == 0) {
                horizontalComp(1);
            }
        }

        //<--------------------VERTICAL------------------------>
        function vertical(number) {
            var thisComp = app.project.activeItem;
            var thisSelected = app.project.activeItem.selectedLayers;
            var thisCompY = thisComp.height;
            app.beginUndoGroup("Horizontal Comp")
            if (dropdown3D.selection == 0) {
                for (var i = 0; i < thisSelected.length; i++) {
                    heightLayer = thisSelected[i].sourceRectAtTime(thisComp.time, false).height;
                    topLayer = thisSelected[i].sourceRectAtTime(thisComp.time, false).top;
                    var currentPosition = thisSelected[i].position.value;

                    //cari titik anchor layer dan titik tengah layer
                    titikTengahY = heightLayer * number + topLayer; //titik tengah layer
                    titikAnchorY = thisSelected[i].anchorPoint.value[1];
                    //hitung jarak titik anchor ke titik tengah layer
                    currentY = thisSelected[i].anchorPoint.value[1];
                    yMove = (titikTengahY - currentY) * (thisSelected[i].scale.value[1] / 100);
                    //buat layer ke tengah apa adanya
                    thisSelected[i]("ADBE Transform Group")("ADBE Position").setValue([currentPosition[0], (thisCompY * number) - yMove, currentPosition[2]]);
                }
            }
            app.endUndoGroup();
        }
        top3dPosition.onClick = function () {
            if (dropdown3D.selection == 0) {
                vertical(0);
            }
        }
        vertical3dPosition.onClick = function () {
            if (dropdown3D.selection == 0) {
                vertical(0.5);
            }

        }
        buttom3dPosition.onClick = function () {
            if (dropdown3D.selection == 0) {
                vertical(1);
            }
        }

        myWindow.onResizing = myWindow.onResize = function () {
            this.layout.resize();
        };
        if (myWindow instanceof Window) {
            myWindow.center();
            myWindow.show();
        } else {
            myWindow.layout.layout(true);
            myWindow.layout.resize();
        }
    }
})(this);