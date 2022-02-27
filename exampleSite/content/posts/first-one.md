---
date: "2022-02-05T22:38:52+01:00"
# date -Is
description: default description
draft: true
title: First One
tags:
  - testing
---
## Starting all over again ... 
This is all i had to say.
<!--more-->
And here is more

# H1 headline

## H2 headline

text
![Logo missing](/img/Logo-svg.ico "this is my title")

### H3 headline

```sql { }
SELECT 1 FROM dual;
```

> hello

# Second H1 headline

## Second H2

Name | Value
---: | ---
Pi | 3.141
Cologne | 4711

```go { hl_lines=["3-8"] }
package main

import (
  "fmt"
  "flag"
  "os"
  "crypto/sha256"
  "math/bits"
  "time"
)

var (
  salt=make(chan string)
  alphabet="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
)

func getSalt(first string, depth, level int){
  level=level+1
  l:=len(alphabet)
  for i:=0;i<l;i++{
    str:=first+string(alphabet[i])
    if level >= depth {
      salt <- str
    } else {
      getSalt(str,depth,level);
    }
  }
}

func getAllSalt(){
  for i:=1;i<=32;i++{
    getSalt("",i,0);
  }
  close(salt);
}
```
