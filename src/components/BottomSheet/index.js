import React, { forwardRef, useCallback } from 'react';
import RNBottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';

// import { Container } from './styles';

const BottomSheet = forwardRef(({ children }, ref) => {
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
    <RNBottomSheet
      ref={ref}
      index={-1}
      snapPoints={['50%']}
      backgroundStyle={{ backgroundColor: 'orange' }}
      backdropComponent={renderBackdrop}
    >
      {children}
    </RNBottomSheet>
  );
});

export default BottomSheet;
