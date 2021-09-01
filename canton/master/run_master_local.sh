#!/bin/bash

canton -c ../postgres.conf -c local/cantonMasterLocal.conf --bootstrap local/bootstrapMasterLocal.canton $1
