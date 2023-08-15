export default function findCenterId(data, facilityName) {
    const center = data.centers.find(center => center.FacilityName === facilityName);
    return center ? center.CenterId : null;
}
