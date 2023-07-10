# Getting Started with Create React App

## Quy ước lỗi trả về với từ server
{
  "error": {
    "publishDate": "Không được publish vào thời điểm trong quá khứ"
  }
}
```

```ts
interface EntityError {
  [key: string | number]: string | EntityError | EntityError[]
}
```


2. Các lỗi `error: string`

```ts
{
  "error": '❌❌❌Lỗi rồi bạn ơi ❌❌❌'
}
```

## Lỗi từ RTK Query

FetchBaseQueryError | SerializedError

Tham khảo: [https://redux-toolkit.js.org/rtk-query/usage-with-typescript#type-safe-error-handling](https://redux-toolkit.js.org/rtk-query/usage-with-typescript#type-safe-error-handling)

## Cache data

Caching là một tính năng quan trọng của RTK Query. Khi chúng ta fetch dữ liệu từ server, RTK Query sẽ cache dữ liệu vào Redux. Tất nhiên đây là cache trên RAM => F5 lại là mất

Caching sẽ dựa vào

- API endpoint (tức là mấy cái khai báo `getPosts`, `getPost` các kiểu đó)
- Query params được sử dụng (ví dụ `1` là param trong `useGetPostQuery(1)`)
- Số lượng active subscription cộng dồn

Khi một component được mounted và gọi `useQuery` hook, thì component đó subcribe cái data đó => Ta có 1 subsciption, nếu nó unmount thì ta sẽ trở lại 0 (unsubcribe)

Khi request được gọi, nếu data đã được cache thi thì RTK sẽ không thực hiện request mới đến server mà trả về data cache đó

Số lượng subscription được cộng dồn khi mà cùng gọi 1 endpoint và query param. Miễn là còn component subcribe data thì data nó chưa mất, nếu không còn component nào subcribe thì mặc định sau 60s data sẽ xóa khỏi cache (nếu lúc đó có component nào subcribe lại data đó thì còn dữ tiếp)