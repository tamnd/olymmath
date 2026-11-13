---
tag: 82BWJAXK3S
kind: problem
type: answer
answer: a_{1}+\cdots+a_{n}=n\cdot12+r-32
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=184333
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Axel is performing a card trick. For this, he uses a Skat deck, consisting of 4 cards of each of the following types, to which he assigns the following face values:

| Type of Card | 7 | 8 | 9 | 10 | Jack | Queen | King | Ace |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Face Value | 7 | 8 | 9 | 10 | 2 | 3 | 4 | 11 |

His friends are supposed to, while he is not in the room, form card stacks according to the following rule:

For each stack, a card is first laid face up, and the stack thus beginning receives as many points as the face value of this card indicates. Then more cards are laid face down on the stack; for each of these cards, the point total of the stack is increased by 1. This is done only until the point total reaches 11; the stack is then complete. It is then turned over so that the previously bottom card now lies face down on top.

1. Example: Lay a 7 face up, lay four cards face down on top, turn the stack over.
2. Example: Lay an Ace face up, turn it over.

Such stacks are formed several times and placed side by side on the table. If there are cards left over at the end, these "remaining cards" are placed face down and countable individually next to the stacks.

Then Axel is called in. He claims that he can find the sum of the face values of the now topmost cards of the stacks from the number of completed stacks and the number of remaining cards. How is this possible?
