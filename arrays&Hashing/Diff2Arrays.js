/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    
    const nums1Set = new Set(nums1);
    const nums2Set = new Set(nums2);

    let nums1Diff = []
    let nums2Diff = []

    for(let i = 0; i < nums1.length; i++){
        if(!nums2Set.has(nums1[i])){
            if(!nums1Diff.includes(nums1[i])){
                nums1Diff.push(nums1[i])
            }
        }
    }

    for(let i = 0; i < nums2.length; i++){
        if(!nums1Set.has(nums2[i])){
            if(!nums2Diff.includes(nums2[i])){
                nums2Diff.push(nums2[i])
            }
        }
    }

    let result = [nums1Diff,nums2Diff]

    return result


};