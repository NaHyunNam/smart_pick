# Dart

- 코드 뒤에 세미콜론은 필수다

## 변수 선언
- Print안에 따옴표 안에 "$"를 붙이면 출력문 안에 변수도 쓸 수 있다. 근데 변수 뒤에 무엇을 붙이지는 못한다 그럴때는 $으로 표현할 수 있다.

### 변수 유형
- Var
- dynamic
- String
- Int
- **Dynamic 과 var의 차이**
  - var는 String으로 선언 후에 타입 변경을 할 수 없음
  - Dynamic은 선언 후에 타입을 변경 할 수 있다.

- Ex)name.runtimeType => 변수 형 확인

### Null 관련
- 기본적으로 한번 값이 입력된 경우 null을 넣을 수 없다.
  - String name = ’남나현’
  - Name = null => X
- **Nullable**
  - String? Name = ‘남나현; // null 타입이 들어갈 수 있음을 확인
  - Name = null => O
- **Non-nullable**
  - print(name!); => name은 null일 수 없다
- **null**: 아무런 값도 있지 않다.

### Final와 Const
- Final, Const 공통사항: 변수의 값을 선언한 뒤로 변경할 수 없다.
- Final, const 모두 타입 명시를 묵시할 수 있다.
- **Final과 const의 차이**
  - Ex) final DateTime now = DateTime.now() O
  - Ex) const DateTime now = DateTime.now() X
  - Final은 빌드 타임의 값을 알고 있지 못해도 된다.
  - const는 빌드 타임(코드가 빌드가 될때)의 값을 알고 있어야한다.
  - Datetime은 실행하는 순간에 빌드타임의 시간값을 가져오기 때문에 Const로 선언 할 수 없다.

### 오퍼레이터
- 계산연산자
  - += => num += 1 => num = num + 1
  - -=
  - /=
  - *=
  - ++
  - —
  - ??= => 변수가 null일때만 오른쪽 값으로 바꾼다
- 비교연산자
  - \>, <, >=, <=, ==, !=
- 타입비교 연산자
  - Is
    - 같은지 확인
    - Ex) number is int
  - Is!
    - 다른지 확인
- 논리연산자
  - &&, ||

## List(리스트)
- 선언법: List<{타입선언}> {변수명} = [‘{데이터}’, ‘{데이터}’];
- List안에 선언하지 않은 타입은 넣지 못한다.
- 첫번째 값 가져오는법: {변수}[0]
- 길이 확인: List1.lenght
- 값 추가: List1.add(‘a’)
- 값 제거: List.remove(‘b’)
- 인덱스 위치 찾는법: List1.indexOf(‘a’)

## Map
- Key, value로 이루어진 데이터
- 선언법: 
```Dart
Map<{key의 타입}, {value의 타입}> = dictionary = { ‘{KeyData}’ : ‘{ValueData}’,     ‘{KeyData}’ : ‘{ValueData}’ }
```
- 값 추가
  - Mapdate.addAll({  ‘a’ : ‘data’ });
  - Mapdata[‘a’] = ’data’;
- 데이터 가져오기: mapdata[{key}]
- 데이터 삭제: A.remove({key})
- Key만 가져오기: a.keys
- values만 가져오기: a.values

## Set
- 선언법: 
```Dart
Final Set<{타입}> {변수명} = { ‘a’, ‘b’ };
```
- Set과 List의 차이는 Set은 안에 중복값을 허용하지 않는다. List는 가능
- 데이터가 Set에 존재하는지 유무 확인: A.contains({key})

## 조건문
- If 
  - 사용법: 
  ```Dart
  If (a == 0) {   // 조건이 ture } else if (a == 2) { } else {}
  ```
- Switch
  - 사용법: 
  ```Dart
  Switch({조건}) {   case 0:        // 0일때       break;    default:       break; }
  ```

## 반복문
- For
  - 사용법: 
  ```Dart
  for(int i = 0; I < 10; I++)
  ```
  - for에서 list 사용법:
  ```Dart
  for(int number in numbers)
  ```
- While
  - 사용법: 
  ```Dart
  while({조건}) {}
  ```
- Do while
  - 사용법: 
  ```Dart
  Do {} while({조건})
  ```
- **while과 do while**
  - While은 조건을 확인하고 돌린다.
  - dowhile은 한번 실행 후 조건을 확인한다.
- Break, continue
  - Break => 멈춘다
  - Continue => 지나친다.

## Enum
- 사용법: 
```Dart
Enum status {   aaa, bbb, ccc } status a = Status.aaa
```
- 그 데이터만 쓰는데 강제할 필요가 있을 때

## 함수
- 반복되는 코드를 재활용
- 선언: 
```Dart
addNumbers({argument}) {  // 함수 실행 부 }
```
- 호출: addNumbers()
- **Positional parameter** => 순서가 중요한 파라미터
- **Optional parameter** => 있어도 되고 없어도되는 파라미터
  - addNumbers(int a, [int b ={기본값}, int c])
    - a는 필수, b,c는 없어도 됨
    - 기본값 선언시에도 데이터를 받을 때에는 값이 들어간다
- **Named parameter** => 이름이 있는 파라미터, 순서가 중요하지 않음
  - 선언부: 
  ```Dart
  addNumber({   required int a, => 필수값   required int b,   int c = {초기값}, => 없어도 됨 });
  ```
  - 호출부: 
  ```Dart
  addNumber(a: 10, b:20, c:30);
  ```
- Void
  - return의 유무
  - 함수 선언시 함수의 return에 대한 형식을 지정할 수 있음
  - Int addNumber() 일 시에는 return으로 int값이 return 됨 
- Named parameter와 Positional parameter를 동시에 사용하는 법
  - Int addNumber(int x}, {int a}) 
  - 호출시에는 addNumber(10, a : 20)
- Arrow function: Int addnumber() => x
  - x를 바로 반환할 수 있음 
- Typedef
  - 선언부: 
  ```Dart
  Typedef aaa = int Function(int x, int y, int z);
  ```
  - 사용법
    ```Dart
    Int add(int x, int y, int z) => x + y + z; Int sub(int x, int y, int z) => x - y - z; Operation operation = add; // add라는 함수를 넣음
    int result = operation(10, 20, 30) int calculate (int x, int y, int z Operation opt) {   return opt(x, y, z); } int result = calculate(10, 20, 30, add)
    // Operation을 넣었기 때문에 해당하는 Operation을 받은 add의 함수가 실행되는 모습을 볼 수 잇음
    ```
