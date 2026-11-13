---
tag: 6S26BFFHV6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=175247
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(Guessing numbers.) a) $A$ writes down two arbitrary numbers that contain the same digits but in a different order; subtracts the smaller from the larger, multiplies the resulting difference by an arbitrary number, and then erases one digit (which is not 0) from the resulting product. $A$ then communicates the remaining number to $B$, who guesses the missing digit.

For example: $38496532 - 23439658 = 15056874$; three times this number: 45171622. If $A$ erases, for instance, the 4 and communicates the remaining 5170622 to $B$, how does $B$ guess the missing digit?
b) $A$ asks $B$ to write down an arbitrary number, and then two more, ensuring that all have the same number of digits; under these three numbers, $A$ will write two more numbers, but commits to stating the sum of all five numbers immediately after writing the first number. $B$ writes down the number 4529; $A$ immediately states the sum: 24527. $B$ then writes down 7643 and 1238, and $A$ immediately responds with 2356 and 8761. $A$'s method is as follows: to find the sum of the five numbers, $A$ adds 2 to the beginning of the first number and subtracts 2 from the last digit $(24527 = 20000 + 4529 - 2)$; the fourth and fifth numbers are obtained by subtracting each digit of the second and third numbers from 9 ( $9999 - 7643 = 2356, 9999 - 1238 = 8761$ ). Prove the correctness of this method and show how $A$ should proceed if $B$ writes down a total of $n$ numbers.
