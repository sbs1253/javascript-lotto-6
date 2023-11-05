export const NUMBER = Object.freeze({
  MIN_LOTTO_NUMBER: 1,
  MAX_LOTTO_NUMBER: 45,
  LOTTO_LENGTH: 6,
  INITIAL_AMOUNT: 1000,
});

export const TEXT = Object.freeze({
  INPUT_AMOUNT: '구입금액을 입력해 주세요.\n',
  INPUT_NUMBER: '당첨 번호를 입력해 주세요.(이름은 쉼표(,) 기준으로 구분):\n',
  INPUT_BONUS: '보너스 번호를 입력해 주세요.\n',
  AMOUNT_ERROR: '[ERROR] 금액은 1000단위로 입력해주세요.',
  LENGTH_ERROR: '[ERROR] 번호는 6자리여야 합니다.',
  NUMBER_ERROR: '[ERROR] 번호는 1부터 45사이의 숫자여야 합니다.',
  STRING_ERROR: '[ERROR] 번호는 숫자로 작성해야 합니다.',
  OUTPUT_NUMBER: '개를 구매했습니다.',
  OUTPUT_PRIZE: '당첨 통계',
  OUTPUT_1ST: '6개 일치 (2,000,000,000원) - 개',
  OUTPUT_2ST: '5개 일치, 보너스 볼 일치 (30,000,000원) - 개',
  OUTPUT_3ST: '5개 일치 (1,500,000원) - 개',
  OUTPUT_4ST: '4개 일치 (50,000원) - 개',
  OUTPUT_5ST: '3개 일치 (5,000원) - 개',
  OUTPUT_RESULT: '총 수익률은 %입니다.',
});