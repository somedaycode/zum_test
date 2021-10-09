const _ = {
  $: <T>(
    selector: string,
    $target: HTMLElement | Document
  ): (T extends HTMLElement ? T : any) | null => {
    if ($target === document) return document.querySelector(selector);
    else if ($target) return $target.querySelector(selector);
    else throw new Error('해당 엘리먼트를 찾을 수 없습니다.');
  },
};

export { _ };
