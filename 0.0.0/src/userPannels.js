const meterbars = $('.meterbars')
meterbars.setInsert = i=> e=>(typeof e === 'string' ? i.insertAdjacentHTML('beforeend', e) : i.insertAdjacentElement('beforeend',(e.insert = meterbars.setInsert(e), e)),e)
meterbars.insert = meterbars.setInsert(meterbars);