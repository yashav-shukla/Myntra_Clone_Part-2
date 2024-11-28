import axios from "axios"

export const fetchWishlistAPI = async () => {
    let res = await axios.get(`https://Myntra.onrender.com/wishlist`)
    return res.data
}

export const removeProd = async (id) => {
    let res = await axios.delete(`https://Myntra.onrender.com/wishlist/${id}`)
    return res.data
}
