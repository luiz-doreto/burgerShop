import React, { forwardRef, useCallback } from 'react';
import RNBottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { Portal } from 'react-native-portalize';

// import { Container } from './styles';

const BottomSheet = forwardRef(({ children, snapPoints }, ref) => {
  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    ),
    []
  );

  return (
    <Portal>
      <RNBottomSheet
        ref={ref}
        index={-1}
        snapPoints={snapPoints}
        backgroundStyle={{ backgroundColor: 'orange' }}
        backdropComponent={renderBackdrop}
      >
        {children}
      </RNBottomSheet>
    </Portal>
  );
});

export default BottomSheet;
