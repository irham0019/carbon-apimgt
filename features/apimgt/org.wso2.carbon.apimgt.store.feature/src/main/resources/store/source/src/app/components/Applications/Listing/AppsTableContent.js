/*
 * Copyright (c) 2017, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
"use strict";
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {TableBody, TableCell, TableRow} from 'material-ui/Table';
import DeleteIcon from 'material-ui-icons/Delete';
import IconButton from 'material-ui/IconButton';
import Tooltip from 'material-ui/Tooltip';
import {CircularProgress} from 'material-ui/Progress';

const AppsTableBody = (props) => {
    const {apps, handleAppDelete, classes} = props;
    let appsTableData = [];
    apps.forEach(app => {
        appsTableData.push(
            <TableRow hover tabIndex="-1" key={app.applicationId}>
                <TableCell>
                    <Link to={"/applications/" + app.applicationId}>
                        {app.name}
                    </Link>
                </TableCell>
                <TableCell>
                    {app.throttlingTier}
                </TableCell>
                <TableCell>
                    {app.lifeCycleStatus}
                </TableCell>
                <TableCell>
                    <Tooltip title="Delete" placement="right-start">
                        <IconButton disabled={app.deleting} data-appId={app.applicationId}
                                    onClick={handleAppDelete} color="accent"
                                    aria-label="Delete">
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
                    { app.deleting && <CircularProgress size={24}/>}
                </TableCell>
            </TableRow>
        );
    });
    return <TableBody>{appsTableData}</TableBody>;
};

export default AppsTableBody;