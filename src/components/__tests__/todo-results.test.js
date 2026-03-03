import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { ref } from 'vue'
import TodoResults from '../todo-results.vue'

vi.mock('@/composables/useCompletedTodos', () => ({
    useCompletedTodos: vi.fn(),
}))

import { useCompletedTodos } from '@/composables/useCompletedTodos'

describe('TodoResults', () => {
    beforeEach(() => {
        vi.clearAllMocks()
    })

    it('Text is green when value is more or equal to 1', () => {
        useCompletedTodos.mockReturnValue({ completedTodos: ref(1) })

        const wrapper = mount(TodoResults)

        expect(wrapper.find('p').classes()).toContain('green-text')
        expect(wrapper.find('p').classes()).not.toContain('red-text')
    })

    it('Text is red when value is 0', () => {
        useCompletedTodos.mockReturnValue({ completedTodos: ref(0) })

        const wrapper = mount(TodoResults)

        expect(wrapper.find('p').classes()).toContain('red-text')
        expect(wrapper.find('p').classes()).not.toContain('green-text')
    })
})
