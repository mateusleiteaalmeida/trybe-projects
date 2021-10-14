class Queue:
    def __init__(self):
        self.files = list()

    def __len__(self):
        return len(self.files)

    def enqueue(self, value):
        self.files.append(value)

    def dequeue(self):
        if self.files.__len__() == 0:
            raise IndexError("list index out of range")
        return self.files.pop(0)

    def search(self, index):
        if index not in range(self.__len__()):
            raise IndexError("list index out of range")
        return self.files[index]

    def get_files(self):
        return self.files
