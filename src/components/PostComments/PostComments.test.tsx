import { fireEvent, render, screen } from "@testing-library/react"
import PostComment from '.'

describe('Teste para o componente PostComment', () => {
    it('Renderizar o componente corretamente', () => {
        render(<PostComment/>)
        expect(screen.getByText('Comentar')).toBeInTheDocument()
    })
    test('Adicionar dois comentários e renderizá-los', () => {
        render(<PostComment/>)
        fireEvent.change(screen.getByTestId('textarea'), {
            target: {
                value: 'Primeiro comentário'
            }
        })
        fireEvent.click(screen.getByTestId('button'))
        fireEvent.change(screen.getByTestId('textarea'), {
            target: {
                value: 'Segundo comentário'
            }
        })
        fireEvent.click(screen.getByTestId('button'))
        expect(screen.getAllByTestId('comment')).toHaveLength(2)
    })
})