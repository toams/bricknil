Search.setIndex({docnames:["_autosummary/bricknil.ble_queue","_autosummary/bricknil.bricknil","_autosummary/bricknil.hub","_autosummary/bricknil.messages","_autosummary/bricknil.peripheral","_autosummary/bricknil.process","_autosummary/bricknil.sensor","api","authors","contributing","index","lego_api/external_motor","lego_api/internal_motor","lego_api/iv","lego_api/led","lego_api/lego","lego_api/remote_button","lego_api/tilt","lego_api/vision","readme"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.viewcode":1,sphinx:55},filenames:["_autosummary/bricknil.ble_queue.rst","_autosummary/bricknil.bricknil.rst","_autosummary/bricknil.hub.rst","_autosummary/bricknil.messages.rst","_autosummary/bricknil.peripheral.rst","_autosummary/bricknil.process.rst","_autosummary/bricknil.sensor.rst","api.rst","authors.rst","contributing.rst","index.rst","lego_api/external_motor.rst","lego_api/internal_motor.rst","lego_api/iv.rst","lego_api/led.rst","lego_api/lego.rst","lego_api/remote_button.rst","lego_api/tilt.rst","lego_api/vision.rst","readme.rst"],objects:{"":{bricknil:[7,0,0,"-"]},"bricknil.ble_queue":{BLEventQ:[0,1,1,""]},"bricknil.ble_queue.BLEventQ":{connect:[0,2,1,""],get_messages:[0,2,1,""],run:[0,2,1,""],send_message:[0,2,1,""]},"bricknil.bricknil":{attach:[1,1,1,""],start:[1,3,1,""]},"bricknil.hub":{BoostHub:[2,1,1,""],Hub:[2,1,1,""],PoweredUpHub:[2,1,1,""],PoweredUpRemote:[2,1,1,""]},"bricknil.hub.Hub":{attach_sensor:[2,2,1,""],char_uuid:[2,4,1,""],hubs:[2,4,1,""],message_queue:[2,4,1,""],peripheral_message_loop:[2,2,1,""],peripheral_queue:[2,4,1,""],peripherals:[2,4,1,""],send_message:[2,2,1,""],tx:[2,4,1,""],uart_uuid:[2,4,1,""]},"bricknil.messages":{Message:[3,1,1,""],UnknownMessageError:[3,5,1,""]},"bricknil.messages.Message":{handlers:[3,4,1,""],hub:[3,4,1,""],parse:[3,2,1,""],parse_attached_io:[3,2,1,""],parse_hub_properties:[3,2,1,""],parse_port_combo_value:[3,2,1,""],parse_port_information:[3,2,1,""],parse_port_mode_information:[3,2,1,""],parse_port_output_feedback:[3,2,1,""],parse_port_value:[3,2,1,""],port_info:[3,4,1,""]},"bricknil.peripheral":{Peripheral:[4,1,1,""]},"bricknil.peripheral.Peripheral":{activate_updates:[4,2,1,""],capabilites:[4,4,1,""],enabled:[4,4,1,""],message_handler:[4,4,1,""],port:[4,4,1,""],send_message:[4,2,1,""],sensor_name:[4,4,1,""],set_output:[4,2,1,""],thresholds:[4,4,1,""],update_value:[4,2,1,""],value:[4,4,1,""]},"bricknil.process":{Process:[5,1,1,""]},"bricknil.process.Process":{MSG_LEVEL:[5,1,1,""],id:[5,4,1,""],level:[5,4,1,""],message:[5,2,1,""],message_debug:[5,2,1,""],message_error:[5,2,1,""],message_info:[5,2,1,""],name:[5,4,1,""]},"bricknil.process.Process.MSG_LEVEL":{DEBUG:[5,4,1,""],ERROR:[5,4,1,""],INFO:[5,4,1,""],NONE:[5,4,1,""],WARN:[5,4,1,""]},"bricknil.sensor":{Button:[6,1,1,""],InternalMotor:[6,1,1,""],InternalTiltSensor:[6,1,1,""],LED:[6,1,1,""],RemoteButtons:[6,1,1,""],TrainMotor:[6,1,1,""],VisionSensor:[6,1,1,""]},"bricknil.sensor.Button":{activate_updates:[6,2,1,""],allowed_combo:[6,4,1,""],capability:[6,1,1,""],datasets:[6,4,1,""]},"bricknil.sensor.Button.capability":{sense_press:[6,4,1,""]},"bricknil.sensor.InternalMotor":{Port:[6,1,1,""],allowed_combo:[6,4,1,""],capability:[6,1,1,""],datasets:[6,4,1,""],ramp_speed2:[6,2,1,""],set_speed:[6,2,1,""]},"bricknil.sensor.InternalMotor.Port":{A:[6,4,1,""],AB:[6,4,1,""],B:[6,4,1,""]},"bricknil.sensor.InternalMotor.capability":{sense_pos:[6,4,1,""],sense_speed:[6,4,1,""]},"bricknil.sensor.InternalTiltSensor":{allowed_combo:[6,4,1,""],capability:[6,1,1,""],datasets:[6,4,1,""],orientation:[6,1,1,""],update_value:[6,2,1,""]},"bricknil.sensor.InternalTiltSensor.capability":{sense_acceleration_3_axis:[6,4,1,""],sense_angle:[6,4,1,""],sense_impact:[6,4,1,""],sense_orientation:[6,4,1,""],sense_tilt:[6,4,1,""]},"bricknil.sensor.InternalTiltSensor.orientation":{down:[6,4,1,""],far_side:[6,4,1,""],left:[6,4,1,""],near_side:[6,4,1,""],right:[6,4,1,""],up:[6,4,1,""]},"bricknil.sensor.LED":{set_color:[6,2,1,""]},"bricknil.sensor.RemoteButtons":{Button:[6,1,1,""],Port:[6,1,1,""],allowed_combo:[6,4,1,""],capability:[6,1,1,""],datasets:[6,4,1,""],minus_pressed:[6,2,1,""],plus_pressed:[6,2,1,""],red_pressed:[6,2,1,""]},"bricknil.sensor.RemoteButtons.Button":{MINUS:[6,4,1,""],PLUS:[6,4,1,""],RED:[6,4,1,""]},"bricknil.sensor.RemoteButtons.Port":{L:[6,4,1,""],R:[6,4,1,""]},"bricknil.sensor.RemoteButtons.capability":{sense_press:[6,4,1,""]},"bricknil.sensor.TrainMotor":{ramp_speed:[6,2,1,""],set_speed:[6,2,1,""],speed:[6,4,1,""]},"bricknil.sensor.VisionSensor":{allowed_combo:[6,4,1,""],capability:[6,1,1,""],datasets:[6,4,1,""]},"bricknil.sensor.VisionSensor.capability":{sense_ambient:[6,4,1,""],sense_color:[6,4,1,""],sense_count:[6,4,1,""],sense_distance:[6,4,1,""],sense_reflectivity:[6,4,1,""],sense_rgb:[6,4,1,""]},bricknil:{ble_queue:[0,0,0,"-"],bricknil:[1,0,0,"-"],hub:[2,0,0,"-"],messages:[3,0,0,"-"],peripheral:[4,0,0,"-"],process:[5,0,0,"-"],sensor:[6,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"],"4":["py","attribute","Python attribute"],"5":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function","4":"py:attribute","5":"py:exception"},terms:{"0x00":4,"0x01":4,"0x02":4,"0x03":4,"0x05":4,"0x11":4,"0x41":4,"0x42":4,"0x45":4,"0x46":4,"0x51":4,"0x60":4,"0x61":4,"0x62":4,"0x81":4,"0xff":6,"100m":19,"16b":[13,15,18],"32b":[11,12,15,17,18],"\u0db1":19,"\u0dbd":19,"abstract":[0,4,6],"break":19,"byte":[0,3,4,6],"class":19,"const":[4,6,19],"default":[5,9],"enum":[5,6],"function":[2,5,9,19],"import":19,"int":[4,5,6],"long":6,"new":[9,19],"return":[4,6,15,16,19],"super":[5,6],"true":[4,11,12,13,14,15,16,17,18,19],"while":19,Added:10,And:[6,19],For:[4,6,19],POS:[11,12,15],The:[1,2,3,6,9,19],Then:[4,19],There:[6,19],Use:6,Uses:19,__main__:19,__name__:19,_convert_speed_to_v:6,abil:19,abl:19,about:[9,19],abov:[6,19],accel:[10,15,17],acceleromet:[6,19],access:[6,19],ack:4,activ:[4,6],activate_upd:[4,6],actual:[6,19],actuat:19,adafruit:[0,1,19],adafruit_bluefruit:0,adafruit_bluefruitl:[3,19],adafruit_python_bluefruitl:8,add:[2,4,9,10],address:6,admit:19,advertis:19,after:19,again:19,ahead:19,akin:1,all:[0,1,2,3,4,5,9,19],allow:[6,19],allowed_combo:6,along:6,also:[0,5,19],alwai:[6,9],amb:6,ambi:[15,18],angl:[6,15,17],ani:[4,5,6,9,19],anoth:19,anyth:[5,6,9,19],anytim:19,api:[10,19],appear:6,append:4,appreci:9,appropri:2,arbitrari:19,architectur:10,argument:6,around:6,articl:9,asid:19,asl2:19,asl:19,assum:9,async:[1,5,6,10,19],asynchron:19,asyncio:19,attaach:6,attach:[1,2,4,6,19],attach_sensor:2,attr:2,avail:6,awai:[0,6],await:19,axi:6,back:[1,4,6,19],background:19,backward:19,base:[0,1,2,3,4,5,6,19],basi:19,basic:6,beazlei:19,becaus:[4,10,19],becom:4,been:8,befor:[1,4,6,9,19],being:[15,16,19],believ:6,below:[6,19],best:9,better:19,between:19,bit:[4,6,9,19],bitmask:[15,16],ble:[0,1,2,10,19],ble_id:2,ble_queu:[2,3],bleak:[0,8,10,19],bleventq:[0,2,3,4,6],blidh:8,blink:19,block:19,blog:[9,19],blue:19,bluefruit:[0,19],bluetooth:[0,1,3,10],bluetoothl:[8,19],bluez:19,bodi:6,bool:4,boost:[2,4,6,10,12,13,15],boosthub:[2,19],both:6,bound:6,brake:[6,19],branch:9,bricknil:[7,8,9],broadcast:2,btn:19,btns_left:19,btns_left_chang:19,btns_right:19,btns_right_chang:19,buffer:4,bugfix:9,build:10,built:[6,9,19],button:[6,10,16],bytearrai:[0,3],bytes_per_dataset:6,calib:[15,17,18],call:[0,1,2,3,4,6,19],callback:[0,1,3,4,19],can:[4,6,9,15,16,19],cancel:6,capabilit:4,capabl:[1,4,6,19],care:[1,19],categori:19,caus:6,chang:[3,4,6,9,10,19],char_uuid:2,characterist:[0,2],check:[1,6,9,19],checkout:9,choic:19,clone:9,close:19,closer:[6,19],closest:6,code:[4,6,19],col:[6,14,15,18],color:[4,6,15,18],com:[8,9,19],combin:[4,6,11,12,15,17,18],combinedmod:4,come:[4,19],comm:0,command:[4,6,19],commit:9,common:4,commun:[1,2,3,8,19],complet:19,complic:4,compon:19,conceiv:19,concurr:19,condit:19,connect:[0,1,2,4,6,19],consist:19,contain:[3,19],contribut:10,contributor:10,control:[1,10],convert:6,copi:9,coroutin:[10,19],correct:1,could:[4,9,19],count:[6,15,18,19],cours:19,coverag:[9,10],creat:[9,19],credit:[9,10],cross:19,cur:[13,15],curio:[1,2,3,19],current:[6,10,13,19],cycl:19,data:[0,4,6],dataset:[4,6,11,12,13,14,15,16,17,18],dataset_decim:[11,12,13,14,15,16,17,18],dataset_total_figur:[11,12,13,14,15,16,17,18],dataset_typ:[11,12,13,14,15,16,17,18],date:10,david:19,dbu:8,debug:[5,15,18],decel:10,decor:[1,2],def:[6,19],defin:[4,6,19],definit:6,depend:[0,4,19],deploi:9,dequ:3,descript:[4,9],design:19,detail:[4,9],detect:19,dev:9,develop:10,devic:[0,4,19],dicola:8,dict:[2,3,4,6,19],dictionari:19,differ:[2,4,6,19],difficult:10,direct:3,directli:19,disclaim:10,discuss:19,dispatch:2,distanc:[6,19],distribut:19,doc:9,docstr:9,document:[6,10,19],doe:5,don:[4,6],done:[4,9],down:6,driven:9,dump:4,durat:19,each:[3,4,5,6,19],easi:19,easier:9,easiest:4,either:[4,6,19],ekanayak:8,elif:19,els:19,enabl:[1,4,6,19],end:[4,19],enough:19,ensur:[1,3,19],entir:19,entri:[1,4],enumer:[5,6],environ:9,error:5,etc:19,eurobrick:19,even:9,event:[1,3,5,19],everi:[9,19],everyth:[1,19],exampl:[1,4,6,10],exce:6,except:3,exclus:3,execut:[1,4,19],exit:19,explain:9,explan:4,express:19,extern:[10,11],fab:9,fabric:9,face:6,facilit:19,fairli:19,fake:6,fals:19,far_sid:6,faster:[3,19],featur:10,feed:19,feedback:4,few:6,field:4,figur:10,file:9,find:19,finish:19,first:[4,6,10,19],flag:19,flat:6,follow:[4,6,8,19],fork:9,format:4,former:19,forward:19,found:4,free:19,from:[0,2,3,4,6,19],front:19,full:19,fulli:19,func:4,further:10,furthest:6,futur:[3,4],gave:8,get:[4,6,10,19],get_messag:[0,3,6],git:9,github:[9,19],githubdoc:9,given:[6,9,19],gmail:8,going:[5,6,19],gradual:19,greater:19,greatli:[8,9],green:19,guidelin:10,hack:6,hand:[6,19],handl:4,handler:[1,2,3,6],happen:[3,19],hard:[4,6],hardwar:6,has:[1,3,4,6,19],have:[2,4,6,8,9,10,19],header:[0,4],help:9,helper:[5,6,19],henrik:8,here:[4,9,19],higher:5,his:8,host:9,how:[4,6,10,19],howev:[3,4],html:9,http:[9,19],hub:[0,1,3,4,6,10,12,13],hub_btn:6,hub_l:6,human:[4,5],identifi:1,im_cf:[15,17],immedi:4,impact:6,impct:[15,17],implement:19,impli:19,implment:19,inch:[6,19],includ:[1,4,9,19],incom:[0,2,3,4],incorpor:8,increas:19,indebt:8,index:[6,10,19],info:[5,19],inform:[3,10],initi:[1,6],inject:1,input:[4,11,12,13,15,16,17,18],insert:[0,2,6],insid:[1,3,19],inspir:19,instal:[9,10],instanc:[0,1,2,3,5,6,19],instanti:[1,19],instead:[3,6,19],integ:4,integr:10,intenaltiltsensor:6,intenum:6,interfac:[0,1,2],intern:[6,10,12,17,19],internalmotor:[6,19],internaltiltsensor:6,interv:19,invers:[6,19],invok:9,is_minus_press:6,is_plus_press:6,is_red_press:6,isn:19,issu:[6,9,19],item:[4,6],itertool:19,its:[3,5,6],just:[1,4,6,9,19],keep:[2,5,6,9,19],keep_run:19,keya:[15,16],keyd:[15,16],keyr:[15,16],keysd:[6,15,16],keyword:19,kind:19,kit:19,kludg:19,kwarg:1,land:3,latter:19,lead:10,led:[6,10],left:[6,15,16,19],left_button:6,left_buttons_chang:6,left_motor:6,lego:[2,4,6,10],length:0,let:19,level:[5,19],librari:[0,3,8,19],licens:[8,19],light:[6,14,15],like:[4,6,19],linux:[0,8,10,19],list:[2,3,4,6,9,19],listen_remot:19,littl:9,local:9,lock:4,log:[5,19],logic:19,look:[9,10,19],loop:[1,2,5],lower:[4,5],lying:6,mac:[0,8,19],mai:[3,4,19],main:[1,2,3,7,19],maintain:19,make:[1,6,9,19],makefil:9,manag:19,mani:[4,9,19],map:6,mark:4,match:[1,4,19],max:5,mean:[4,19],measur:19,meet:9,mesaur:6,messag:[0,2,4,5,6,19],message_debug:5,message_error:5,message_handl:4,message_info:[5,19],message_queu:2,method:[1,3,6,19],might:9,millisecond:19,minu:6,minus_press:[6,19],mkvirtualenv:9,mock:10,mode:[3,4,6,11,12,13,14,15,16,17,18],mode_combin:[11,12,15,17,18],modern:19,modul:10,more:[4,9,19],most:4,motion:19,motor:[1,4,6,10,11,12],motor_left:19,motor_right:19,motor_spe:19,motors_chang:6,move:[2,6,19],msg:[0,3,4,19],msg_byte:[2,3,4,6],msg_level:[5,19],msg_name:2,much:[6,19],multipl:[2,4,15,16],multitud:19,must:[0,6],name:[1,2,4,5,6,9,10,11,12,13,14,15,16,17,18,19],narrow:9,near_sid:6,need:[1,4,5,6,10,19],neg:[6,19],nest:19,neutral:6,newer:19,next:19,nibbl:4,nice:19,nil:19,nine:6,nodej:19,none:[4,5,6],note:[6,10,19],noth:[15,16],notic:19,notifi:6,now:[3,4,6,9,19],num_dataset:6,number:[4,6,19],numer:5,object:[0,1,3,5,19],offici:[4,9],onc:19,one:[2,4,6],onli:[2,4,6,19],onto:1,open:[8,9,19],oper:[3,9],or_cf:[15,17],orang:19,order:[4,6,19],org:9,orient:[6,19],origin:9,orint:[15,17],other:[6,19],otherwis:[4,6],our:[2,19],out:[4,10,19],outgo:[2,4],output:[4,6,11,12,14,15,18,19],over:[6,8,19],overrid:2,own:3,packag:9,page:[9,10],parallel:19,paramet:[0,1,3,4,6],pars:[0,3,4],parse_attached_io:[3,4],parse_hub_properti:3,parse_port_combo_valu:3,parse_port_inform:3,parse_port_mode_inform:3,parse_port_output_feedback:3,parse_port_valu:3,parser:[2,3,4],part:[6,9],particular:19,pass:[1,9,19],percentag:6,perform:2,peripher:[1,2,3,6,19],peripheral_message_loop:[2,4],peripheral_queu:[2,3],peripheral_typ:1,peripheralname_chang:1,peripheraltyp:1,person:8,physic:[1,2,4,19],pick:6,pip:[9,19],platform:19,pleas:[9,19],plu:6,plug:19,plus_press:[6,19],point:[1,19],pop:3,port:[1,3,4,6,12,13,15,16,19],port_info:3,portion:8,posit:6,possibl:[9,10],post:9,power:[11,12,15,19],poweredhub:6,poweredup:[1,2,4,6,10],powereduphub:[2,19],poweredupremot:[2,19],practic:19,preceed:6,predefin:6,prefer:19,prepend:0,press:[6,15,16,19],previou:19,print:[5,19],process:[0,2,4,19],profil:10,program:19,progress:6,project:[8,9,19],properti:6,propos:9,protocol:[4,6,10],provid:[0,4,5,6,8,19],prox:[15,18],proxim:6,pull:10,pull_request:9,pure:[1,8],purpl:19,push:[9,15,16,19],put:[1,4,6,9,19],python:[8,9,10],queue:[0,1,2,4,19],queur:3,quit:19,radio:19,ramp:[6,19],ramp_spe:[6,19],ramp_speed2:6,ramp_time_m:6,rang:[6,19],raspberri:19,raw:[3,4,6],rckei:[15,16],read:4,readabl:[4,5],readi:[9,19],readm:9,receiv:2,receive_messag:0,red:[4,6,15,16],red_press:6,reduc:19,reflect:6,reflt:[6,15,18],regist:6,regular:19,releas:10,rememb:9,remot:[2,6,10,16],remotebutton:[6,19],repeat:19,repo:9,report:6,repres:[4,6],reproduc:9,request:[0,10],requir:[9,19],respect:[4,8],respond:19,rest:1,revers:[6,19],rgb:[4,6,14,15,18],right:[6,15,16,19],robot:19,rotat:6,rough:6,roughli:[6,19],routin:[1,19],row:4,rpi:10,rst:9,rudimentari:19,run:[0,1,2,3,6],run_test:9,safeti:[3,19],sai:19,same:[2,6,15,16,19],saniti:6,scope:9,search:10,second:19,section:19,see:[4,6,9,19],seem:[4,6],seen:4,self:[4,6,19],send:[0,3,4,6,9,19],send_messag:[0,2,4],sens:[1,4,6,19],sense_acceleration_3_axi:6,sense_ambi:6,sense_angl:6,sense_color:[4,6],sense_count:[6,19],sense_dist:[4,6,19],sense_distannc:4,sense_impact:6,sense_orient:6,sense_po:6,sense_press:[6,19],sense_reflect:6,sense_rgb:6,sense_spe:6,sense_tilt:6,sensor:[1,2,4,10,18],sensor_chang:19,sensor_id:4,sensor_nam:4,separ:19,sequenc:[4,19],servic:2,set:[2,4,6,9,19],set_color:[6,19],set_output:[4,6],set_spe:[6,19],setup:[0,4,9],should:[3,9,19],show:19,shown:19,side:[6,15,16],signal:19,simpl:10,simplic:4,sinc:[6,10],singl:[4,6],singleton:0,sinhala:19,sleep:19,slight:6,snensor:19,softwar:19,some:[5,6,19],someth:19,soon:19,sourc:[0,1,2,3,4,5,6,8,19],speak:19,special:6,specif:2,specifi:1,speed:[6,10,11,12,15,19],stack:8,stai:19,stand:6,standalon:6,start:[1,10,19],state:6,statement:19,step:9,stop:19,store:6,str:[0,4,5],straightforward:19,strictli:6,string:1,sub:[1,19],subclass:[2,3,5,19],submodul:10,substitut:6,support:[1,4,6,9,10,19],suppos:19,sure:[1,9,19],synchroniz:[12,15],syntax:19,system:[1,3,9,10,19],tabl:4,tacho:[10,11,12,15],tag:9,take:[1,19],target:19,target_spe:6,task:[5,9,19],task_don:19,tell:[15,16,19],tell_robot:19,term:8,test:[9,19],than:[5,6,19],thei:9,them:[6,9],thi:[0,1,2,3,4,5,6,8,9,10,19],thing:19,those:19,thread:[3,19],three:[4,6,19],threshold:[4,6],through:[0,3,6,9,19],thu:19,tilt:[6,10,17,19],time:[2,4,6,19],todo:[3,9],toni:8,too:19,top:[6,19],tox:9,track:[2,5,6],train:[6,10],train_btn:19,train_btn_chang:19,train_l:19,train_sensor:19,train_sensor_chang:19,trainmotor:[6,19],translat:6,travi:9,treat:6,trigger:[4,6],trio:19,troubleshoot:9,tupl:[0,4],turn:19,two:[6,12,15,16,19],txt:9,type:[2,3,4,5,6,19],uart:2,uart_uuid:2,uint16:6,uint32:6,uint8:6,under:[6,8,19],underli:0,uniqu:5,unit:6,universalqueu:[2,3],unknownmessageerror:3,unless:4,unlik:6,unlock:4,untest:19,until:19,updat:[1,3,4,6,9,19],update_valu:[3,4,6],upper:4,upsid:6,use:[3,4,6,9,19],used:[6,19],useful:[2,19],user:[1,19],user_system_setup_func:1,uses:[2,4,19],using:[0,6,19],util:1,utilti:5,uuid:[0,2,19],valid:6,valu:[3,4,6,15,16,19],variabl:[1,2,6,19],variou:[5,6],version:9,via:[4,19],video:19,virantha:[8,9,19],virtual:6,virtualenv:9,virtualenvwrapp:9,vision:[6,10,18],visionsensor:[6,19],vlt:[13,15],voltag:[10,13],volunt:9,wai:[4,8,9,19],wait:[2,19],want:[2,3,4,6,9,19],warn:5,warranti:19,wasn:19,wave:[6,19],web:9,websit:9,wedo:4,welcom:[7,9],well:8,were:19,what:19,whatev:19,when:[2,4,6,9,15,16],whenev:19,where:[4,6,19],whether:[6,9],which:[1,4,8,19],whoever:9,whole:1,width:4,win10:[0,10,19],wireless:10,within:6,without:19,word:19,work:[9,19],would:[4,9],write:0,writedirectmodedata:4,xxxx:19,xxxxx:19,yellow:19,yet:6,you:[1,2,4,6,9,19],your:[1,6,9,19],your_name_her:9,zero:4},titles:["bricknil.ble_queue","bricknil.bricknil","bricknil.hub","bricknil.messages","bricknil.peripheral","bricknil.process","bricknil.sensor","API Documentation","Credits","Development","BrickNil Docs (version 0.4)","&lt;no title&gt;","&lt;no title&gt;","&lt;no title&gt;","&lt;no title&gt;","Notes on LEGO wireless BLE protocol","&lt;no title&gt;","&lt;no title&gt;","&lt;no title&gt;","BrickNil - Control LEGO Bluetooth Sensors and Motors with Python"],titleterms:{"class":[0,1,2,3,4,5,6],"function":1,api:7,architectur:19,ble:15,ble_queu:0,bluetooth:19,boost:19,bricknil:[0,1,2,3,4,5,6,10,19],bug:9,build:19,button:[15,19],changelog:10,color:19,content:10,contribut:9,contributor:8,control:19,credit:8,current:15,develop:[8,9],disclaim:19,doc:10,document:[7,9],exampl:19,extern:15,featur:[9,19],feedback:9,fix:9,further:19,get:9,guidelin:9,how:9,hub:[2,15,19],implement:9,indic:10,inform:15,instal:19,integr:19,intern:15,lead:8,led:[15,19],lego:[15,19],list:10,loop:19,member:[0,1,2,3,4,5,6],messag:3,motor:[15,19],note:15,peripher:4,poweredup:19,process:5,protocol:15,pull:9,python:19,remot:[15,19],report:9,request:9,run:19,sensor:[6,15,19],simpl:19,start:9,submit:9,submodul:7,tabl:10,test:10,tilt:15,todo:10,train:19,verni:19,version:10,vision:[15,19],voltag:15,wireless:15,write:9}})