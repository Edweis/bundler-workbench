(()=>{var U=202,D=502,i=400,P=409,L=100,p=201,M=417;var a=403,t=504,l=410,x=505,v=418,c=419,F=507,S=500,G=411,H=423,Q=420,Y=405,f=301,h=302,g=207,m=300,C=511,B=204,y=203,V=406,q=404,W=501,w=304,b=200,K=206,X=402,k=308,Z=412,j=428,z=102,J=407,$=431,d=408,u=413,s=414,EE=416,TE=205,RE=303,eE=503,rE=101,OE=307,NE=429,_E=401,IE=422,AE=415,oE=305,N={ACCEPTED:U,BAD_GATEWAY:D,BAD_REQUEST:i,CONFLICT:P,CONTINUE:L,CREATED:p,EXPECTATION_FAILED:M,FORBIDDEN:a,GATEWAY_TIMEOUT:t,GONE:l,HTTP_VERSION_NOT_SUPPORTED:x,IM_A_TEAPOT:v,INSUFFICIENT_SPACE_ON_RESOURCE:c,INSUFFICIENT_STORAGE:F,INTERNAL_SERVER_ERROR:S,LENGTH_REQUIRED:G,LOCKED:H,METHOD_FAILURE:Q,METHOD_NOT_ALLOWED:Y,MOVED_PERMANENTLY:f,MOVED_TEMPORARILY:h,MULTI_STATUS:g,MULTIPLE_CHOICES:m,NETWORK_AUTHENTICATION_REQUIRED:C,NO_CONTENT:B,NON_AUTHORITATIVE_INFORMATION:y,NOT_ACCEPTABLE:V,NOT_FOUND:q,NOT_IMPLEMENTED:W,NOT_MODIFIED:w,OK:b,PARTIAL_CONTENT:K,PAYMENT_REQUIRED:X,PERMANENT_REDIRECT:k,PRECONDITION_FAILED:Z,PRECONDITION_REQUIRED:j,PROCESSING:z,PROXY_AUTHENTICATION_REQUIRED:J,REQUEST_HEADER_FIELDS_TOO_LARGE:$,REQUEST_TIMEOUT:d,REQUEST_TOO_LONG:u,REQUEST_URI_TOO_LONG:s,REQUESTED_RANGE_NOT_SATISFIABLE:EE,RESET_CONTENT:TE,SEE_OTHER:RE,SERVICE_UNAVAILABLE:eE,SWITCHING_PROTOCOLS:rE,TEMPORARY_REDIRECT:OE,TOO_MANY_REQUESTS:NE,UNAUTHORIZED:_E,UNPROCESSABLE_ENTITY:IE,UNSUPPORTED_MEDIA_TYPE:AE,USE_PROXY:oE};var _={202:"Accepted",502:"Bad Gateway",400:"Bad Request",409:"Conflict",100:"Continue",201:"Created",417:"Expectation Failed",424:"Failed Dependency",403:"Forbidden",504:"Gateway Timeout",410:"Gone",505:"HTTP Version Not Supported",418:"I'm a teapot",419:"Insufficient Space on Resource",507:"Insufficient Storage",500:"Internal Server Error",411:"Length Required",423:"Locked",420:"Method Failure",405:"Method Not Allowed",301:"Moved Permanently",302:"Moved Temporarily",207:"Multi-Status",300:"Multiple Choices",511:"Network Authentication Required",204:"No Content",203:"Non Authoritative Information",406:"Not Acceptable",404:"Not Found",501:"Not Implemented",304:"Not Modified",200:"OK",206:"Partial Content",402:"Payment Required",308:"Permanent Redirect",412:"Precondition Failed",428:"Precondition Required",102:"Processing",407:"Proxy Authentication Required",431:"Request Header Fields Too Large",408:"Request Timeout",413:"Request Entity Too Large",414:"Request-URI Too Long",416:"Requested Range Not Satisfiable",205:"Reset Content",303:"See Other",503:"Service Unavailable",101:"Switching Protocols",307:"Temporary Redirect",429:"Too Many Requests",401:"Unauthorized",451:"Unavailable For Legal Reasons",422:"Unprocessable Entity",415:"Unsupported Media Type",305:"Use Proxy",421:"Misdirected Request"},I={Accepted:202,"Bad Gateway":502,"Bad Request":400,Conflict:409,Continue:100,Created:201,"Expectation Failed":417,"Failed Dependency":424,Forbidden:403,"Gateway Timeout":504,Gone:410,"HTTP Version Not Supported":505,"I'm a teapot":418,"Insufficient Space on Resource":419,"Insufficient Storage":507,"Internal Server Error":500,"Length Required":411,Locked:423,"Method Failure":420,"Method Not Allowed":405,"Moved Permanently":301,"Moved Temporarily":302,"Multi-Status":207,"Multiple Choices":300,"Network Authentication Required":511,"No Content":204,"Non Authoritative Information":203,"Not Acceptable":406,"Not Found":404,"Not Implemented":501,"Not Modified":304,OK:200,"Partial Content":206,"Payment Required":402,"Permanent Redirect":308,"Precondition Failed":412,"Precondition Required":428,Processing:102,"Proxy Authentication Required":407,"Request Header Fields Too Large":431,"Request Timeout":408,"Request Entity Too Large":413,"Request-URI Too Long":414,"Requested Range Not Satisfiable":416,"Reset Content":205,"See Other":303,"Service Unavailable":503,"Switching Protocols":101,"Temporary Redirect":307,"Too Many Requests":429,Unauthorized:401,"Unavailable For Legal Reasons":451,"Unprocessable Entity":422,"Unsupported Media Type":415,"Use Proxy":305,"Misdirected Request":421};function nE(E){var T=_[E.toString()];if(!T)throw new Error("Status code does not exist: "+E);return T}function A(E){var T=I[E];if(!T)throw new Error("Reason phrase does not exist: "+E);return T}var o=nE;var R;(function(E){E[E.ACCEPTED=202]="ACCEPTED",E[E.BAD_GATEWAY=502]="BAD_GATEWAY",E[E.BAD_REQUEST=400]="BAD_REQUEST",E[E.CONFLICT=409]="CONFLICT",E[E.CONTINUE=100]="CONTINUE",E[E.CREATED=201]="CREATED",E[E.EXPECTATION_FAILED=417]="EXPECTATION_FAILED",E[E.FAILED_DEPENDENCY=424]="FAILED_DEPENDENCY",E[E.FORBIDDEN=403]="FORBIDDEN",E[E.GATEWAY_TIMEOUT=504]="GATEWAY_TIMEOUT",E[E.GONE=410]="GONE",E[E.HTTP_VERSION_NOT_SUPPORTED=505]="HTTP_VERSION_NOT_SUPPORTED",E[E.IM_A_TEAPOT=418]="IM_A_TEAPOT",E[E.INSUFFICIENT_SPACE_ON_RESOURCE=419]="INSUFFICIENT_SPACE_ON_RESOURCE",E[E.INSUFFICIENT_STORAGE=507]="INSUFFICIENT_STORAGE",E[E.INTERNAL_SERVER_ERROR=500]="INTERNAL_SERVER_ERROR",E[E.LENGTH_REQUIRED=411]="LENGTH_REQUIRED",E[E.LOCKED=423]="LOCKED",E[E.METHOD_FAILURE=420]="METHOD_FAILURE",E[E.METHOD_NOT_ALLOWED=405]="METHOD_NOT_ALLOWED",E[E.MOVED_PERMANENTLY=301]="MOVED_PERMANENTLY",E[E.MOVED_TEMPORARILY=302]="MOVED_TEMPORARILY",E[E.MULTI_STATUS=207]="MULTI_STATUS",E[E.MULTIPLE_CHOICES=300]="MULTIPLE_CHOICES",E[E.NETWORK_AUTHENTICATION_REQUIRED=511]="NETWORK_AUTHENTICATION_REQUIRED",E[E.NO_CONTENT=204]="NO_CONTENT",E[E.NON_AUTHORITATIVE_INFORMATION=203]="NON_AUTHORITATIVE_INFORMATION",E[E.NOT_ACCEPTABLE=406]="NOT_ACCEPTABLE",E[E.NOT_FOUND=404]="NOT_FOUND",E[E.NOT_IMPLEMENTED=501]="NOT_IMPLEMENTED",E[E.NOT_MODIFIED=304]="NOT_MODIFIED",E[E.OK=200]="OK",E[E.PARTIAL_CONTENT=206]="PARTIAL_CONTENT",E[E.PAYMENT_REQUIRED=402]="PAYMENT_REQUIRED",E[E.PERMANENT_REDIRECT=308]="PERMANENT_REDIRECT",E[E.PRECONDITION_FAILED=412]="PRECONDITION_FAILED",E[E.PRECONDITION_REQUIRED=428]="PRECONDITION_REQUIRED",E[E.PROCESSING=102]="PROCESSING",E[E.PROXY_AUTHENTICATION_REQUIRED=407]="PROXY_AUTHENTICATION_REQUIRED",E[E.REQUEST_HEADER_FIELDS_TOO_LARGE=431]="REQUEST_HEADER_FIELDS_TOO_LARGE",E[E.REQUEST_TIMEOUT=408]="REQUEST_TIMEOUT",E[E.REQUEST_TOO_LONG=413]="REQUEST_TOO_LONG",E[E.REQUEST_URI_TOO_LONG=414]="REQUEST_URI_TOO_LONG",E[E.REQUESTED_RANGE_NOT_SATISFIABLE=416]="REQUESTED_RANGE_NOT_SATISFIABLE",E[E.RESET_CONTENT=205]="RESET_CONTENT",E[E.SEE_OTHER=303]="SEE_OTHER",E[E.SERVICE_UNAVAILABLE=503]="SERVICE_UNAVAILABLE",E[E.SWITCHING_PROTOCOLS=101]="SWITCHING_PROTOCOLS",E[E.TEMPORARY_REDIRECT=307]="TEMPORARY_REDIRECT",E[E.TOO_MANY_REQUESTS=429]="TOO_MANY_REQUESTS",E[E.UNAUTHORIZED=401]="UNAUTHORIZED",E[E.UNAVAILABLE_FOR_LEGAL_REASONS=451]="UNAVAILABLE_FOR_LEGAL_REASONS",E[E.UNPROCESSABLE_ENTITY=422]="UNPROCESSABLE_ENTITY",E[E.UNSUPPORTED_MEDIA_TYPE=415]="UNSUPPORTED_MEDIA_TYPE",E[E.USE_PROXY=305]="USE_PROXY",E[E.MISDIRECTED_REQUEST=421]="MISDIRECTED_REQUEST"})(R||(R={}));var e=function(){return e=Object.assign||function(E){for(var T,r=1,n=arguments.length;r<n;r++){T=arguments[r];for(var O in T)Object.prototype.hasOwnProperty.call(T,O)&&(E[O]=T[O])}return E},e.apply(this,arguments)},aE=e(e({},N),{getStatusCode:A,getStatusText:o});var HE=()=>{let E="hello",T="ciao";R.OK&&console.log("They are equal!"),console.log("This should alwasy show"),console.log("should only show in PROD"),console.log("production")};})();
