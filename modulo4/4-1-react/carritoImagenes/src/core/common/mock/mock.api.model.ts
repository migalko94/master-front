export interface PictureInfoMockApi {
  id: number;
  picUrl: string;
  title: string;
}

export const getData = (): Promise<PictureInfoMockApi[]> => {
  return Promise.resolve([
    {
      id: 1,
      picUrl:
        "https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Alexander",
    },
    {
      id: 2,
      picUrl:
        "https://images.pexels.com/photos/1458916/pexels-photo-1458916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Biscuit",
    },
    {
      id: 3,
      picUrl:
        "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Quicky",
    },
    {
      id: 4,
      picUrl:
        "https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2960&q=80",
      title: "Miaui",
    },
    {
      id: 5,
      picUrl:
        "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      title: "Doraemon",
    },
    {
      id: 6,
      picUrl:
        "https://images.unsplash.com/photo-1572590285030-0ae6a4715671?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      title: "Garfield",
    },
  ]);
};
