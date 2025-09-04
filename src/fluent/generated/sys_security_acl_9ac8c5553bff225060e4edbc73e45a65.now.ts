import { Acl } from '@servicenow/sdk/core'

export default Acl({
    $id: '9ac8c5553bff225060e4edbc73e45a65',
    script: ``,
    active: true,
    admin_overrides: true,
    decision_type: 'allow',
    description: 'Default access control on x_snc_sso_lrm_test_legal_request',
    local_or_existing: 'Existing',
    type: 'record',
    table: 'x_snc_sso_lrm_test_legal_request',
    operation: 'create',
    roles: ['d6c845553bff225060e4edbc73e45a3c'],
})
