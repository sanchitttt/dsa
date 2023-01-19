function sortUsingStack(arr){
  while(arr.length){
      const element = arr.pop();
      if(!stack.length){
          stack.push(element);
      }
      else if(stack[stack.length-1] < element){
          stack.push(element);
      }
      else if(stack[stack.length-1] > element){
          while(stack.length){
              let stackPopped = stack.pop();
              if(!stack.length){
                  arr.push(stackPopped);
                  stack.push(element);
                  break;
              }
              if(stackPopped > element){
                  arr.push(stackPopped);
              }
              else{
                  stack.push(element);
                 break;
              }
          }
      }
  }
}
