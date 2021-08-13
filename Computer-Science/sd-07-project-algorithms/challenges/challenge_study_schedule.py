def study_schedule(permanence_period, target_time):
    if isinstance(target_time, int) is not True:
        return None
    counter = 0
    for (i, j) in permanence_period:
        if isinstance(i, int) and isinstance(j, int) and i <= target_time <= j:
            counter += 1
    if counter == 0:
        return None
    return counter
