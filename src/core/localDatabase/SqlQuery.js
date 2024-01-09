import { LeaveHistoryModel } from "./modals/LeaveHistoryModel";
import { PersonalInfoModel } from "./modals/PersonalInfoModel";

export function addOrUpdateLeave(params) {
    return new Promise((resolve, reject) => {
        LeaveHistoryModel.repository.databaseLayer
            .bulkInsertOrReplace([
                {
                    timestamp: Date.now(),
                    ...params
                }
            ])
            .then((res) => {
                resolve(res);
            }).catch((error) => {
                reject(error);
            });
    });
}

export function getAllManualLists() {
    return new Promise((resolve, reject) => {
        LeaveHistoryModel.repository
            .query({})
            .then((rows) => {
                resolve(rows);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

export function removeHistory() {
    return new Promise((resolve, reject) => {
        LeaveHistoryModel.repository
            .destroyAll()
            .then(() => {
                resolve();
            })
            .catch((error) => {
                reject(error);
            });
    });
}

export function findLeaveHistoryById(id) {
    return new Promise((resolve, reject) => {
        LeaveHistoryModel.repository
            .find(id)
            .then((rows) => {
                resolve(rows);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

export function savePersonalInfo(params) {
    return new Promise((resolve, reject) => {
        PersonalInfoModel.repository.databaseLayer
            .bulkInsertOrReplace([
                {
                    timestamp: Date.now(),
                    ...params
                }
            ])
            .then((res) => {
                resolve(res);
            }).catch((error) => {
                reject(error);
            });
    });
}

export function getPersonalInfo() {
    return new Promise((resolve, reject) => {
        PersonalInfoModel.repository
            .query({})
            .then((rows) => {
                resolve(rows);
            })
            .catch((error) => {
                reject(error);
            });
    });
}
