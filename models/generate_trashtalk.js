const task = {
  engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
  designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
  entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢'],
}
const phrase = ['很簡單', '很容易', '很快', '很正常']

//設定一個摸彩箱函式，隨機抽取陣列的index
function randomIndex(array) {
  return Math.floor(Math.random() * array.length)
}

// define generateTrashTalk function
function generateTrashTalk(options) {
  let trashTalkBox = ''
  if (options.Profession === 'engineer') {
    trashTalkBox = '工程師'
    trashTalkBox += task.engineer[randomIndex(task.engineer)]
    trashTalkBox += phrase[randomIndex(phrase)]
    trashTalkBox += '吧？'
    return trashTalkBox
  }
  if (options.Profession === 'designer') {
    trashTalkBox = '設計師'
    trashTalkBox += task.designer[randomIndex(task.designer)]
    trashTalkBox += phrase[randomIndex(phrase)]
    trashTalkBox += '吧？'
    return trashTalkBox
  }
  if (options.Profession === 'entrepreneur') {
    trashTalkBox = '創業家'
    trashTalkBox += task.entrepreneur[randomIndex(task.entrepreneur)]
    trashTalkBox += phrase[randomIndex(phrase)]
    trashTalkBox += '吧？'
    return trashTalkBox
  }
}

// exports generateTrashTalk function
module.exports = generateTrashTalk
