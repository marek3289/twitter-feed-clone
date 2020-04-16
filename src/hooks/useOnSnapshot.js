import { useState, useEffect } from 'react';
import { firestore } from 'fbConfig';

export const useOnSnapshot = () => {
  const [newUpdate, setNewUpdate] = useState([]);

  useEffect(() => {
    const subscribe = firestore.collection('tweets').onSnapshot((snapshot) => {
      snapshot.docChanges().forEach(({ type, doc }) => {
        if (type === 'added' && !doc.dm) {
          const data = doc.data();

          // Because of loading all data in once by firebase, some of tweets laod faster and substitute their place in state.
          // To keep the proper tweets order I had to let through only these tweets which has been created within 3 second.
          if (data.createdAt.seconds > new Date().getTime() / 1000 - 3) {
            setNewUpdate([
              {
                id: doc.id,
                content: data.content,
                createdAt: data.createdAt,
                userId: data.userId,
              },
            ]);
          }
        } else if (type === 'removed') {
          setNewUpdate([{ actionType: 'removed', id: doc.id }]);
        }
      });
    });

    return () => subscribe;
  }, []);

  return { newUpdate };
};
