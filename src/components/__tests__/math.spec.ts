import { describe, it, expect } from 'vitest'

import { add, subtract, bankAccount } from '@/filets/math'


describe('math', () => {

  //toBe
  it('相加', () => {
    expect(add(2, 3)).toBe(5);
  })

  //not toBe
  it('相減', () => {
    expect(subtract(2, 3)).not.toBe(0);
  })

  //toBeNull
  it('should get null', () => {
    const number = null
    expect(number).toBeNull();
  })

  //toBeLessThan | toBeLessThanOrEqual
  it('should get sum bigger than 500 or Equal 500', () => {
    expect(add(20, 30)).toBeLessThan(500)
    expect(add(200, 300)).toBeLessThanOrEqual(500)
  })

  //toBeTruthy | toBeFalsy
  it('名字是否等於admin', () => {
    const username = 'admin';
    expect(username === 'admin').toBeTruthy();
  })

  //toEqual 用於比較Object object無法用toBe比較
  it('測試物件資料', () => {
    expect(bankAccount.getBalance()).toEqual({ balance: 500 })
  })

  //toContain 判斷element是否存在於Array 注意大小寫
  it('是否存在陣列', () => {
    const arrayList = ['aaa', 'bbb', 'ccc']
    expect(arrayList).toContain('ccc')
  })

  //toMatch i大小寫皆可
  it('phunker should include p', () => {
    expect('phunker').toMatch(/p/i)
  })

})
