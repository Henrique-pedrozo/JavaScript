let tarefas = [];
let id = 1;

// Função para adicionar uma nova tarefa
function adicionarTarefa(descricao) {
    if (!descricao.trim()) {
        console.log("Erro: A descrição da tarefa não pode estar vazia.");
        return;
    }

    tarefas.push({ id: id++, descricao, concluida: false });
    console.log(`Tarefa "${descricao}" adicionada com sucesso!`);
}

// Função para listar todas as tarefas
function listarTarefas() {
    if (tarefas.length === 0) {
        console.log("Nenhuma tarefa cadastrada.");
        return;
    }

    console.log("Lista de tarefas:");
    tarefas.forEach(tarefa => {
        let status = tarefa.concluida ? "[X]" : "[ ]";
        console.log(`${status} ID: ${tarefa.id} - ${tarefa.descricao}`);
    });
}

// Função para marcar uma tarefa como concluída
function concluirTarefa(idTarefa) {
    let tarefa = tarefas.find(t => t.id === idTarefa);
    if (!tarefa) {
        console.log("Erro: Tarefa não encontrada.");
        return;
    }

    tarefa.concluida = true;
    console.log(`Tarefa "${tarefa.descricao}" marcada como concluída.`);
}

// Função para remover uma tarefa
function removerTarefa(idTarefa) {
    let index = tarefas.findIndex(t => t.id === idTarefa);
    if (index === -1) {
        console.log("Erro: Tarefa não encontrada.");
        return;
    }

    let removida = tarefas.splice(index, 1);
    console.log(`Tarefa "${removida[0].descricao}" removida com sucesso.`);
}

// Testando o sistema no console
adicionarTarefa("Estudar JavaScript");
adicionarTarefa("Praticar exercícios");
listarTarefas();
concluirTarefa(1);
listarTarefas();
removerTarefa(2);
listarTarefas();