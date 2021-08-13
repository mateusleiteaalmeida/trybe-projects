def find_duplicate(nums):
    for i in range(len(nums)):
        if isinstance(nums[i], int) and nums[i] >= 0:
            for j in range(i + 1, len(nums)):
                if nums[i] == nums[j]:
                    return nums[i]
    return False
