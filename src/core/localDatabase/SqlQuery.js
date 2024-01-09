import { ProceduresModel } from "./modals/ProceduresModel";

export function addOrUpdateLeave(params) {
    return new Promise((resolve, reject) => {
        ProceduresModel.repository.databaseLayer
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
        ProceduresModel.repository
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
        ProceduresModel.repository
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
        ProceduresModel.repository
            .find(id)
            .then((rows) => {
                resolve(rows);
            })
            .catch((error) => {
                reject(error);
            });
    });
}
