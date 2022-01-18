'use strict';

//★関数★
//未完了TODOリストに追加する処理（「追加」「戻す」ボタン押下時）
function incompleteTodoInsert(imcompleteTodoText){
    //未完了リストに追加するためのエレメントを作成
    const div = $('<div>',{class:'list-row'});
    const li = $('<li>').text(imcompleteTodoText);
    const completeButton = $('<button>',{
        id:'completeButton',
        on:{
            click:function(){
                todoComplete(this);
            }
        }
    }).text('完了');
    const deleteButton = $('<button>',{
        id:'deleteButton',
        on:{
            click:function(){
                rowDelete(this);
            }
        }
    }).text('削除');

    //エレメント追加
    div.append(li,completeButton,deleteButton);
    $('#incompleteList').append(div);
}

// 完了ボタン押下時の処理
function todoComplete(completeTarget){
    //「完了」ボタン押下した行の、テキストを取得
    const incompleteText = $(completeTarget).prev().text();
    rowDelete(completeTarget);

    const div = $('<div>',{class:'list-row'});
    const li = $('<li>').text(incompleteText);
    const backButton = $('<button>',{
        id:'backButton',
        on:{
            click:function(){
                incompleteTodoInsert(incompleteText);
                rowDelete(this);
            }
        }
    }).text('戻す');

    //エレメント追加
    div.append(li,backButton);
    $('#completeList').append(div);
}
//「削除」「完了」「戻す」ボタン押下時に対象の行を削除する
function rowDelete(deleteRowButton){
    $(deleteRowButton).parent().remove();
}

//★イベント★
//「追加」ボタン押下時の処理
$('#addButton').on('click',()=>{
    //インプットのテキストを採取
    const inputText = $('#input-text-area').val();
    $('#input-text-area').val("");
    incompleteTodoInsert(inputText);
});