from unittest import TestCase
from selenium import webdriver


class TasksTestCase(TestCase):
    def setUp(self) -> None:
        self.browser = webdriver.Firefox()
        self.MAX_WAIT = 10

    def tearDown(self) -> None:
        self.browser.quit()

    def test_adicionar_tarefa(self) -> None:
        """
        Como usuário, para me organizar, eu quero poder anotar tarefas. Nessas
        tarefas, eu quero poder dar uma data limite para realizar elas (um
        deadline) e/ou atribuir uma prioridade.
        """
        pass

    def test_atribuir_cores_para_tarefas(self) -> None:
        """
        Como usuário, eu quero poder atribuir cores para as tarefas, como um
        guia visual. Essas cores podem ser definidar através de uma tag na
        nota como individualmente.
        """
        pass

    def test_adicionar_subtarefa(self) -> None:
        """
        Como usuário, eu quero poder adicionar subtarefas em uma tarefa já
        adicionada. Com isso, eu posso quebrar tarefas maiores e mais complexas
        em pequenas partes, deixando mais organizado. Também, uma subtarefa
        pode ter uma outra subtarefa filha dela.
        """
        pass

    def test_adicionar_caderno_com_tarefas(self) -> None:
        """
        Como usuário, eu quero poder criar um caderno para armazenar um
        determinado tipo de tarefa. Assim, cada caderno vai armazenar tarefas
        relacionadas a um projeto ou a alguma rotina que tem que ser realizada.
        """
        pass
    
    def test_listar_tarefas_baseadas_no_prazo(self) -> None:
        """
        Como usuário eu quero poder listar todas as tarefas que eu devo fazer,
        ordenadas pelo seu prazo de conclusão (deadline). Assim, eu posso
        decidir o que é mais urgente fazer.
        """
        pass

    def test_armazernar_horario_adicao_alteracao_conclusao_tarefa(self) -> None:
        """
        Como usuário, eu quero ter acesso à hora em que eu adicionei, conclui
        ou alterei uma tarefa, e esses dados devem persistir (a não ser que a
        tarefa seja removida).
        """
        pass
