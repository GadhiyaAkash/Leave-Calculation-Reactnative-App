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

export function getAllHistory() {
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

export function savePersonalInfo(params, id = 1) {
    return new Promise((resolve, reject) => {
        params = Object.assign({ id }, params);
        PersonalInfoModel.repository.databaseLayer
            .bulkInsertOrReplace([
                {
                    timestamp: Date.now(),
                    ...params, 
                }
            ])
            .then(() => {
                getPersonalInfo().then((data) => {
                    resolve(data);
                });
            }).catch((error) => {
                reject(error);
            });
    });
}

export function getPersonalInfo(userId = 1) {
    return new Promise((resolve, reject) => {
        PersonalInfoModel.repository
            .find(userId)
            .then((rows) => {
                resolve(rows);
            })
            .catch((error) => {
                reject(error);
            });
    });
}
