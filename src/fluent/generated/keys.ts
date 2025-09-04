import "@servicenow/sdk/global";

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                        "cs0": {
                            "table": "sys_script_client",
                            "id": "2105033712804acf838b2d782b41dbaa"
                        },
                        "src_server_script_ts": {
                            "table": "sys_module",
                            "id": "3feee9a87c2d4d039273092253d16635"
                        },
                        "br0": {
                            "table": "sys_script",
                            "id": "6ff94d351eec418b98efa38d8e96aff9"
                        },
                        "package_json": {
                            "table": "sys_module",
                            "id": "0ffae083ae8943599e360920c98b5549"
                        }
                    };
                composite: [
                        {
                            "table": "sys_security_acl_role",
                            "id": "26c8c5553bff225060e4edbc73e45a89",
                            "key": {
                                "sys_security_acl": "6ac8c5553bff225060e4edbc73e45a85",
                                "sys_user_role": "d6c845553bff225060e4edbc73e45a3c"
                            }
                        },
                        {
                            "table": "sys_security_acl_role",
                            "id": "6ec8c5553bff225060e4edbc73e45a6b",
                            "key": {
                                "sys_security_acl": "9ac8c5553bff225060e4edbc73e45a65",
                                "sys_user_role": "d6c845553bff225060e4edbc73e45a3c"
                            }
                        },
                        {
                            "table": "sys_security_acl_role",
                            "id": "6ec8c5553bff225060e4edbc73e45a90",
                            "key": {
                                "sys_security_acl": "a2c8c5553bff225060e4edbc73e45a8d",
                                "sys_user_role": "d6c845553bff225060e4edbc73e45a3c"
                            }
                        },
                        {
                            "table": "sys_security_acl_role",
                            "id": "eac8c5553bff225060e4edbc73e45a81",
                            "key": {
                                "sys_security_acl": "22c8c5553bff225060e4edbc73e45a7e",
                                "sys_user_role": "d6c845553bff225060e4edbc73e45a3c"
                            }
                        }
                    ];
            }
        }
    }
}
