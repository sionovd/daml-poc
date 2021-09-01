run commands:
    daml build
    daml codegen js .\.daml\dist\daml-0.1.0.dar -o entrance-permit\daml.js
    daml start
    cd .\entrance-permit\
    npm i
    npm start

env:
    issuer = buildingA
    master = masterBuilding
    observers = buildingA,masterBuilding,buildingC
    ledgerId=daml-sandbox
