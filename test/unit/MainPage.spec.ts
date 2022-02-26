import { shallowMount } from '@vue/test-utils'
import Promotion from '~/types/promotion'
import Blog from '~/types/blog'
import Category from "~/types/category";
import Blogs from '~/components/MainPage/Blogs.vue'
import Promotions from '~/components/MainPage/Promotions.vue'
import Products from '~/components/MainPage/Products.vue'

describe('MainPage', () => {
  test('promotions', () => {
    const promotions: Promotion[] = [
      {
        uuid: "abc-def",
        title: "Title 1",
        content: "Contents",
        metadata: {
          image: "image-string",
          valid_to: "2022-06-06",
          valid_from: "2022-07-04"
        },
        created_at: "2022-07-04",
        updated_at: "2022-07-04"
      }
    ]
    const wrapper = shallowMount(Promotions, {
      propsData: {
        "promotions-list": promotions
      }
    })
    const h2 = wrapper.find('h2');
    expect(h2.text()).toEqual("Title 1")
  })

  test('blogs', () => {
    const blogs: Blog[] = [
      {
        uuid: "abc-def",
        title: "blog title",
        slug: "",
        content: "",
        metadata: {
          image: "",
          author: ""
        },
        created_at: "",
        updated_at: ""}
    ]
    const wrapper = shallowMount(Blogs, {
      propsData: {
        "blogs-list": blogs
      }
    })
    const h3 = wrapper.find('h3');
    expect(h3.text()).toEqual("blog title")
  })

  test('products', () => {

    const category: Category = {
        uuid: "05014f1e-eb83-3452-982b-00a2bd575226",
        title: "wet pet food",
        slug: "wet-pet-food",
        created_at: "2022-02-20T00:00:26.000000Z",
        updated_at: "2022-02-20T00:00:26.000000Z"
      }
    const mockMethod = jest.fn()
    const wrapper = shallowMount(Products, {
      methods: {
        loadProducts: mockMethod
      },
      propsData: {
        "category": category
      }
    })

    expect(mockMethod).toHaveBeenCalled()

  })
})
