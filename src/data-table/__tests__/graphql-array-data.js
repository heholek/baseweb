/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
export default [
  {
    __typename: 'ClusterApp',
    id: 'application_1571594168012_3331301',
    user: 'hive',
    name: 'Carbon monoxide detection',
    queue: 'queue-42',
    state: 'RUNNING',
    progress: 10,
    applicationType: 'SPARK',
    applicationTags:
      'x-piper-dc,piper.user.jsmith,is_not_backfill,hive_on_spark,piper.pipeline.id.hive_etl_block71_bill',
    startedTime: 1573505382609,
    elapsedTime: 5427972,
    finishedTime: 0,
    finalStatus: 'UNDEFINED',
    memorySeconds: 61752163961,
    vcoreSeconds: 16090342,
    allocatedMB: 468992,
    allocatedVCores: 124,
    runningContainers: 31,
    realUser: 'jsmith',
    source: 'Piper',
    allocatedGB: 458,
    piper: {
      pipelineId: 'hive_etl_block71_bill',
      user: 'jsmith',
      __typename: 'YarnClusterAppPiper',
    },
  },
  {
    __typename: 'ClusterApp',
    id: 'application_1571594168012_3311309',
    user: 'hive',
    name: 'Traffic congestion monitoring',
    queue: 'queue-42',
    state: 'RUNNING',
    progress: 10,
    applicationType: 'SPARK',
    applicationTags:
      'x-piper-dc,piper.user.jsmith,is_not_backfill,piper.pipeline.id.hive_etl_block71,hive_on_spark',
    startedTime: 1573493816099,
    elapsedTime: 16994465,
    finishedTime: 0,
    finalStatus: 'UNDEFINED',
    memorySeconds: 8810539023,
    vcoreSeconds: 3449497,
    allocatedMB: 151552,
    allocatedVCores: 60,
    runningContainers: 15,
    realUser: 'jsmith',
    source: 'Piper',
    allocatedGB: 148,
    piper: {
      pipelineId: 'hive_etl_block71',
      user: 'jsmith',
      __typename: 'YarnClusterAppPiper',
    },
  },
  {
    __typename: 'ClusterApp',
    id: 'application_1571594168012_3337166',
    user: 'hive',
    name: 'Hive on Spark',
    queue: 'queue-42',
    state: 'RUNNING',
    progress: 10,
    applicationType: 'SPARK',
    applicationTags:
      'piper.user.jdoe,x-piper-dc,is_not_backfill,piper.pipeline.id.hive_etl_block71,hive_on_spark',
    startedTime: 1573508708050,
    elapsedTime: 2102533,
    finishedTime: 0,
    finalStatus: 'UNDEFINED',
    memorySeconds: 1491879687,
    vcoreSeconds: 96940,
    allocatedMB: 90112,
    allocatedVCores: 9,
    runningContainers: 6,
    realUser: 'jdoe',
    source: 'Piper',
    allocatedGB: 88,
    piper: {
      pipelineId: 'hive_etl_block71',
      user: 'jdoe',
      __typename: 'YarnClusterAppPiper',
    },
  },
  {
    __typename: 'ClusterApp',
    id: 'application_1571594168012_3328920',
    user: 'hive',
    name: 'Traffic processing using Spark',
    queue: 'queue-42',
    state: 'RUNNING',
    progress: 10,
    applicationType: 'SPARK',
    applicationTags:
      'x-piper-dc,piper.user.jsmith,is_not_backfill,piper.pipeline.id.hive_etl_bundle72,hive_on_spark',
    startedTime: 1573504037652,
    elapsedTime: 6772919,
    finishedTime: 0,
    finalStatus: 'UNDEFINED',
    memorySeconds: 6626281753,
    vcoreSeconds: 2587971,
    allocatedMB: 18432,
    allocatedVCores: 8,
    runningContainers: 2,
    realUser: 'jsmith',
    source: 'Piper',
    allocatedGB: 18,
    piper: {
      pipelineId: 'hive_etl_bundle72',
      user: 'jsmith',
      __typename: 'YarnClusterAppPiper',
    },
  },
  {
    __typename: 'ClusterApp',
    id: 'application_1571594168012_3340246',
    user: 'hive',
    name: 'Restaurant load balancing',
    queue: 'queue-42',
    state: 'RUNNING',
    progress: 10,
    applicationType: 'SPARK',
    applicationTags: 'hive_on_spark',
    startedTime: 1573510448631,
    elapsedTime: 361957,
    finishedTime: 0,
    finalStatus: 'UNDEFINED',
    memorySeconds: 6166578,
    vcoreSeconds: 2685,
    allocatedMB: 18432,
    allocatedVCores: 8,
    runningContainers: 2,
    realUser: 'hive',
    source: '',
    allocatedGB: 18,
    piper: null,
  },
  {
    __typename: 'ClusterApp',
    id: 'application_1571594168012_3330615',
    user: 'hive',
    name: 'Truck load delivery',
    queue: 'queue-42',
    state: 'RUNNING',
    progress: 10,
    applicationType: 'SPARK',
    applicationTags:
      'piper.user.ckelly,x-piper-dc,is_not_backfill,hive_on_spark,piper.pipeline.id.hive_etl_bigwords',
    startedTime: 1573504857471,
    elapsedTime: 5953108,
    finishedTime: 0,
    finalStatus: 'UNDEFINED',
    memorySeconds: 84511358278,
    vcoreSeconds: 5178016,
    allocatedMB: 40960,
    allocatedVCores: 6,
    runningContainers: 3,
    realUser: 'ckelly',
    source: 'Piper',
    allocatedGB: 40,
    piper: {
      pipelineId: 'hive_etl_bigwords',
      user: 'ckelly',
      __typename: 'YarnClusterAppPiper',
    },
  },
  {
    __typename: 'ClusterApp',
    id: 'application_1571594168012_3339281',
    user: 'hive',
    name: 'My favorite app',
    queue: 'queue-42',
    state: 'RUNNING',
    progress: 10,
    applicationType: 'SPARK',
    applicationTags:
      'x-piper-dc,piper.user.awhite,is_not_backfill,hive_on_spark,piper.pipeline.id.hive_etl_merlion',
    startedTime: 1573509894847,
    elapsedTime: 915739,
    finishedTime: 0,
    finalStatus: 'UNDEFINED',
    memorySeconds: 760470868,
    vcoreSeconds: 296225,
    allocatedMB: 8192,
    allocatedVCores: 4,
    runningContainers: 1,
    realUser: 'awhite',
    source: 'Piper',
    allocatedGB: 8,
    piper: {
      pipelineId: 'hive_etl_merlion',
      user: 'awhite',
      __typename: 'YarnClusterAppPiper',
    },
  },
];
